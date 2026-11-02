import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2h8rwr0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2h8rwr0j"/>`,
		"fallback": "mingcute:camcorder-off-line",
	});
}

export default Component;
