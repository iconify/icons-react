import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgi9bnbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgi9bnbsf"/>`,
		"fallback": "bx:bxs-box",
	});
}

export default Component;
