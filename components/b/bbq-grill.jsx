import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lr03i9bpd.css';
import '../../css/g/gnm1a_rpe.css';
import '../../css/l/l2t523w3d.css';
import '../../css/n/nxs63bcjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lr03i9bpd"/><path class="gnm1a_rpe"/><path class="l2t523w3d"/><path class="nxs63bcjf"/></g>`,
		"fallback": "andrsrxn:bbq-grill",
	});
}

export default Component;
