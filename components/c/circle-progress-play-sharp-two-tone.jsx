import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/q2c3u1btc.css';
import '../../css/t/t0_3emlbr.css';
import '../../css/t/tv4-78bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="q2c3u1btc"/><path class="t0_3emlbr"/><path class="tv4-78bvg"/></g>`,
		"fallback": "keyline-icons:circle-progress-play-sharp-two-tone",
	});
}

export default Component;
