import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i08j2mbvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i08j2mbvs"/>`,
		"fallback": "mdi:fridge-industrial-off-outline",
	});
}

export default Component;
