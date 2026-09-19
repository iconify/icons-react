import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j7cqu14cb.css';
import '../../css/o/o5q8363wp.css';
import '../../css/v/v90nhibmu.css';
import '../../css/v/vr41qqvca.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j7cqu14cb"/><path class="o5q8363wp"/><path class="v90nhibmu"/><path class="vr41qqvca"/></g>`,
		"fallback": "glyphs:caret-square-duo",
	});
}

export default Component;
