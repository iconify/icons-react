import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnow--1ni.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnow--1ni"/>`,
		"fallback": "devicon-plain:browserstack",
	});
}

export default Component;
