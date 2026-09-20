import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxq2d1-sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxq2d1-sn"/>`,
		"fallback": "mdi:event-minus",
	});
}

export default Component;
