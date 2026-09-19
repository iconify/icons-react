import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tay6gdufd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tay6gdufd"/>`,
		"fallback": "bi:git",
	});
}

export default Component;
