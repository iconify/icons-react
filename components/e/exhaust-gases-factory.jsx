import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr2exgb4b.css';
import '../../css/q/qm66gg7dg.css';
import '../../css/g/gu5vjpboj.css';
import '../../css/q/qed38xl4a.css';
import '../../css/n/nnfj7zgqz.css';
import '../../css/h/hhj-5jq8l.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/t/ttmowqonm.css';
import '../../css/q/qj19s7bxr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr2exgb4b"/><path class="qm66gg7dg"/><path class="gu5vjpboj"/><path class="qed38xl4a"/><path class="nnfj7zgqz"/><path class="hhj-5jq8l"/><g class="jn8qy4bru"><path class="ttmowqonm"/><path class="qj19s7bxr"/></g>`,
		"fallback": "openmoji:exhaust-gases-factory",
	});
}

export default Component;
