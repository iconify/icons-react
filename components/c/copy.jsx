import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d9t2abtjj.css';
import '../../css/n/n48oy1bff.css';
import '../../css/y/yrkvtpn7y.css';
import '../../css/x/xu4vo3b0g.css';
import '../../css/k/klpm2wbyc.css';
import '../../css/u/u8be8bcbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="d9t2abtjj wm-shadow"/><path class="n48oy1bff"/><path class="yrkvtpn7y"/><path class="xu4vo3b0g"/><path class="klpm2wbyc"/><path class="u8be8bcbj"/></g>`,
		"fallback": "withicons-retro:copy",
	});
}

export default Component;
