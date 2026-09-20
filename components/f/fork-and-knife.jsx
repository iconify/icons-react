import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyf8pgzgt.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/h/hws86vb1n.css';
import '../../css/z/zj7mh4bty.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyf8pgzgt"/><g class="x8poo_bjf"><path class="hws86vb1n"/><path class="zj7mh4bty"/></g>`,
		"fallback": "openmoji:fork-and-knife",
	});
}

export default Component;
