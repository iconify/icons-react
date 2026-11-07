import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejx2y1bzf.css';
import '../../css/n/nyjp9ub1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejx2y1bzf"/><path class="nyjp9ub1w"/>`,
		"fallback": "solar:cloud-waterdrop-bold-duotone",
	});
}

export default Component;
