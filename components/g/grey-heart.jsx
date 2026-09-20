import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk__bbbih.css';
import '../../css/c/cl68f3slr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk__bbbih"/><path class="cl68f3slr"/>`,
		"fallback": "openmoji:grey-heart",
	});
}

export default Component;
