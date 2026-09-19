import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umcqggbeq.css';
import '../../css/n/n1lsf0bnc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGZzR9RbFh" class="umcqggbeq"/></defs><g class="n1lsf0bnc"><use href="#SVGZzR9RbFh"/><use href="#SVGZzR9RbFh"/></g>`,
		"fallback": "bi:cc-square",
	});
}

export default Component;
