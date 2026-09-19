import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yno7z3b_k.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yno7z3b_k"/>`,
		"fallback": "fa7-brands:hooli",
	});
}

export default Component;
