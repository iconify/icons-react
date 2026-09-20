import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h5o-fccjp.css';
import '../../css/g/g8yveu05c.css';
import '../../css/b/bdqmdob9c.css';
import '../../css/c/c2jjhcymo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGKBMqkb6d)"><path class="h5o-fccjp"/><path class="g8yveu05c"/><path class="bdqmdob9c"/></g><defs><clipPath id="SVGKBMqkb6d"><path class="c2jjhcymo"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:captivate-prime",
	});
}

export default Component;
