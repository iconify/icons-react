import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rh43wjo-k.css';
import '../../css/u/u1sbtfbps.css';
import '../../css/t/tgagj5b1m.css';
import '../../css/w/w4394pj2y.css';
import '../../css/q/qpf-imbkb.css';
import '../../css/v/v6662i_bw.css';
import '../../css/e/e4kpjpbrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rh43wjo-k"/><path class="u1sbtfbps"/><path class="tgagj5b1m"/><path class="w4394pj2y"/><path class="qpf-imbkb"/><path class="v6662i_bw"/><path class="e4kpjpbrv"/></g>`,
		"fallback": "solar:cloud-snowfall-minimalistic-linear",
	});
}

export default Component;
