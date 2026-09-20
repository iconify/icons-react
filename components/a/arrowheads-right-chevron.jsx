import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex_e1-b4y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ex_e1-b4y"/>`,
		"fallback": "streamline-block:arrowheads-right-chevron",
	});
}

export default Component;
