import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oxoykcbef.css';
import '../../css/o/oe1qgp6zr.css';
import '../../css/x/xn5jby14h.css';
import '../../css/v/vb-0tmbnj.css';
import '../../css/i/ie-xi4bjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="oxoykcbef wm-k"/><path class="oe1qgp6zr wm-a"/><path class="wm-shadow xn5jby14h"/><path class="vb-0tmbnj wm-k"/><path class="ie-xi4bjz wm-a"/></g>`,
		"fallback": "withicons:check-check-engrave",
	});
}

export default Component;
