import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5_4hn5in.css';
import '../../css/d/d1fei8prm.css';
import '../../css/y/yg56u96kd.css';
import '../../css/t/t-70k9bkx.css';
import '../../css/e/es5nvkbsl.css';
import '../../css/z/z04drlb1l.css';
import '../../css/m/myn56wbjw.css';
import '../../css/b/bk9ljcbut.css';
import '../../css/y/y3n6-4-dw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5_4hn5in"/><path class="d1fei8prm"/><path class="yg56u96kd"/><path class="t-70k9bkx"/><path class="es5nvkbsl"/><g class="z04drlb1l"><path class="myn56wbjw"/><path class="bk9ljcbut"/><path class="y3n6-4-dw"/></g>`,
		"fallback": "openmoji:flagged-building",
	});
}

export default Component;
