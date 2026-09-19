import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epy770bkb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epy770bkb"/>`,
		"fallback": "bi:bookmark-x-fill",
	});
}

export default Component;
