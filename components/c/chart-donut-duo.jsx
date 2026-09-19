import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v6ldc6i3j.css';
import '../../css/e/eb5uhxb5u.css';
import '../../css/o/orpyotf8m.css';
import '../../css/m/m-alvoznk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v6ldc6i3j"/><path class="eb5uhxb5u"/><path class="orpyotf8m"/><path class="m-alvoznk"/></g>`,
		"fallback": "glyphs:chart-donut-duo",
	});
}

export default Component;
