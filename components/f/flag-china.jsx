import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/j/juovah9_r.css';
import '../../css/d/d9h9h0obf.css';
import '../../css/n/n1cp27bsg.css';
import '../../css/f/fu6eqdbqo.css';
import '../../css/c/cmkyeojlu.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><circle class="juovah9_r"/><circle class="d9h9h0obf"/><circle class="n1cp27bsg"/><circle class="fu6eqdbqo"/><path class="cmkyeojlu"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-china",
	});
}

export default Component;
