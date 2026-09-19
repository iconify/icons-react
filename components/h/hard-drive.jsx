import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pld43v02m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pld43v02m"/>`,
		"fallback": "feather:hard-drive",
	});
}

export default Component;
