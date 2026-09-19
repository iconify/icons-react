import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tos9vmb2b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tos9vmb2b"/>`,
		"fallback": "bi:graph-up-arrow",
	});
}

export default Component;
