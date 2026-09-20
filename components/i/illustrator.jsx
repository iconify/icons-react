import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hffj5m-4u.css';
import '../../css/t/t-v03obce.css';
import '../../css/n/n_-89i9ig.css';

const viewBox = {"width":83,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGRJNxRbwH)"><path class="hffj5m-4u"/><path class="t-v03obce"/></g><defs><clipPath id="SVGRJNxRbwH"><path class="n_-89i9ig"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:illustrator",
	});
}

export default Component;
