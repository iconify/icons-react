import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx7y9_cnq.css';
import '../../css/v/ve3l7corq.css';
import '../../css/e/eo2zgi8fc.css';
import '../../css/j/j_be_nb1y.css';
import '../../css/p/p219jpjgj.css';
import '../../css/b/bw0822u3p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx7y9_cnq"/><path class="ve3l7corq"/><path class="eo2zgi8fc"/><path class="j_be_nb1y"/><path class="p219jpjgj"/><path class="bw0822u3p"/>`,
		"fallback": "fxemoji:blackuniversalrecyclingsymbol",
	});
}

export default Component;
