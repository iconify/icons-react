import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/cdi5j99db.css';
import '../../css/a/analfc2ut.css';
import '../../css/h/hl03b8bpk.css';
import '../../css/f/f11zee_rp.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="cdi5j99db"/><path class="analfc2ut"/><path class="hl03b8bpk"/><path class="f11zee_rp"/></g>`,
		"fallback": "marketeq:call-in-2",
	});
}

export default Component;
