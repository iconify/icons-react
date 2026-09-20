import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/t/tsr9o8boz.css';
import '../../css/h/h8bkbccbg.css';
import '../../css/o/o9qiojmml.css';
import '../../css/z/zfl_jac2j.css';
import '../../css/z/zhnmupb5x.css';
import '../../css/u/umj20kj0i.css';
import '../../css/l/l48yrhqcy.css';
import '../../css/k/kqoti-bwz.css';
import '../../css/k/kkbn8ggrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="tsr9o8boz"/><path class="h8bkbccbg"/><path class="o9qiojmml"/><path class="zfl_jac2j"/><path class="zhnmupb5x"/><path class="umj20kj0i"/><path class="l48yrhqcy"/><path class="kqoti-bwz"/><path class="kkbn8ggrm"/></g>`,
		"fallback": "solar:confetti-broken",
	});
}

export default Component;
