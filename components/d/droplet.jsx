import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5mrk6mkb.css';
import '../../css/b/bmvlsf21d.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/e/eil8_qxmz.css';
import '../../css/f/fe8ua7bgq.css';
import '../../css/q/qfq_m8bpl.css';
import '../../css/x/xrm8ttgfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGHDmqXcrS" x1="0" x2="0" y1="-40" y2="80" gradientUnits="userSpaceOnUse"><stop offset="0" class="t5mrk6mkb"/><stop offset="1" class="bmvlsf21d"/></linearGradient><linearGradient id="SVGewqL3bJj" x1="5.5" x2="18.5" y1="2.25" y2="21.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path fill="url(#SVGHDmqXcrS)" class="eil8_qxmz wm-shadow"/><path class="fe8ua7bgq wm-k"/><path fill="url(#SVGewqL3bJj)" class="qfq_m8bpl wm-k"/><path class="wm-shine xrm8ttgfw"/></g>`,
		"fallback": "withicons-suite:droplet",
	});
}

export default Component;
