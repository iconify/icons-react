import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qlh00dy-r.css';
import '../../css/w/wlkeg55qi.css';
import '../../css/n/neilwg2ov.css';
import '../../css/p/pnj2h7f9i.css';
import '../../css/t/tkulpsbjv.css';
import '../../css/e/eu0u2-b-s.css';
import '../../css/i/ioh8xuj4k.css';
import '../../css/c/c-8vh9b5g.css';
import '../../css/m/m84nxpu9x.css';
import '../../css/v/vq5o5pbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qlh00dy-r"/><path class="wlkeg55qi"/><path class="neilwg2ov"/><path class="pnj2h7f9i"/><path class="tkulpsbjv"/><path class="eu0u2-b-s"/><path class="ioh8xuj4k"/><path class="c-8vh9b5g"/><path class="m84nxpu9x"/><path class="vq5o5pbtn"/></g>`,
		"fallback": "solar:confetti-minimalistic-line-duotone",
	});
}

export default Component;
