import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rjhr_yfqp.css';
import '../../css/w/w0tahgb7o.css';
import '../../css/u/un6g0p8cw.css';
import '../../css/f/fjtiwkodd.css';
import '../../css/u/u2-g4hbgt.css';
import '../../css/d/dt5qoccsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rjhr_yfqp"/><path class="w0tahgb7o wm-shadow"/><path class="un6g0p8cw"/><path class="fjtiwkodd"/><path class="u2-g4hbgt"/><path class="dt5qoccsj"/></g>`,
		"fallback": "withicons:gold-ingot-engrave",
	});
}

export default Component;
