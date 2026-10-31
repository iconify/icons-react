import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kevxp1n2k.css';
import '../../css/q/q0_7t1dwj.css';
import '../../css/p/prx2m6e_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="kevxp1n2k"/><path class="q0_7t1dwj"/><path class="prx2m6e_q"/></g>`,
		"fallback": "struq:clipboard",
	});
}

export default Component;
