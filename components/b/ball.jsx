import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ls4jnlmwq.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/q/qcfz5dbfa.css';
import '../../css/r/rytwwbcac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ls4jnlmwq"/><circle class="mpf1g8bav"/><path class="qcfz5dbfa"/><path class="rytwwbcac"/></g>`,
		"fallback": "andrsrxn:ball",
	});
}

export default Component;
