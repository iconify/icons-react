import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/p/phbwvobjr.css';
import '../../css/f/fnpl309tr.css';
import '../../css/j/jcvlxyb4x.css';
import '../../css/z/zorgjn9or.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><rect class="phbwvobjr"/><rect class="fnpl309tr"/><rect class="jcvlxyb4x"/><path class="zorgjn9or"/></g>`,
		"fallback": "glyphs:grid-remove-bold",
	});
}

export default Component;
