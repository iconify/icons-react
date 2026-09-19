import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iong-ib4q.css';
import '../../css/e/ekwcleb1t.css';
import '../../css/r/rv_w8uilx.css';
import '../../css/j/jt33ib4zf.css';
import '../../css/q/q3xjswsyf.css';
import '../../css/x/xw1ujgiun.css';
import '../../css/m/mgtje0bph.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iong-ib4q"/><path class="ekwcleb1t"/><path class="rv_w8uilx"/><path class="jt33ib4zf"/><path class="q3xjswsyf"/><path class="xw1ujgiun"/><path class="mgtje0bph"/></g>`,
		"fallback": "fluent-emoji-flat:bus",
	});
}

export default Component;
