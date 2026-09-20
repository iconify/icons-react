import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vlfm7vbmw.css';
import '../../css/i/im2t2g6ti.css';
import '../../css/r/r4y1ovbns.css';
import '../../css/c/cz7b21b0u.css';
import '../../css/a/awgmcr9_g.css';
import '../../css/i/i0i0lwbsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="vlfm7vbmw"/><rect class="im2t2g6ti"/><rect transform="rotate(90 11 13)" class="r4y1ovbns"/><rect class="cz7b21b0u"/><path class="awgmcr9_g"/><path class="i0i0lwbsj"/></g>`,
		"fallback": "lets-icons:gamepad",
	});
}

export default Component;
