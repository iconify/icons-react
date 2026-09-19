import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3nac-40h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3nac-40h"/>`,
		"fallback": "bi:caret-down-square-fill",
	});
}

export default Component;
