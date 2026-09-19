import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck4pbloln.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck4pbloln"/>`,
		"fallback": "fa7-brands:creative-commons-nd",
	});
}

export default Component;
