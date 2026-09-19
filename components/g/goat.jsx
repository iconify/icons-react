import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uuu1vp-jr.css';
import '../../css/l/l7kxgsbbw.css';
import '../../css/j/j-u9atb4w.css';
import '../../css/h/h-7_d6b5j.css';
import '../../css/l/lz2d3m1se.css';
import '../../css/j/j2s0crbep.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uuu1vp-jr"/><path class="l7kxgsbbw"/><path class="j-u9atb4w"/><path class="h-7_d6b5j"/><path class="lz2d3m1se"/><path class="j2s0crbep"/></g>`,
		"fallback": "fluent-emoji-flat:goat",
	});
}

export default Component;
