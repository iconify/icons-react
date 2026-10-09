import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfaxxob_q.css';
import '../../css/u/u_g3lebpf.css';
import '../../css/l/l0p1n7ykb.css';
import '../../css/c/c3bd3nbjc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfaxxob_q"/><path class="u_g3lebpf"/><path class="l0p1n7ykb"/><path class="c3bd3nbjc"/>`,
		"fallback": "energy-icons:data-centre-48-bold",
	});
}

export default Component;
