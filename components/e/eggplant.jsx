import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kit9s8biw.css';
import '../../css/l/lqgc3327d.css';
import '../../css/r/rtlsz678t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kit9s8biw"/><path class="lqgc3327d"/><path class="rtlsz678t"/></g>`,
		"fallback": "fluent-emoji-flat:eggplant",
	});
}

export default Component;
