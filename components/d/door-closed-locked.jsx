import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qfxvrvbgs.css';
import '../../css/x/x3t9tfaqk.css';
import '../../css/q/qa-4gobiz.css';
import '../../css/q/qwo29zb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qfxvrvbgs"/><path class="x3t9tfaqk"/><path class="qa-4gobiz"/><path class="qwo29zb_b"/></g>`,
		"fallback": "hugeicons:door-closed-locked",
	});
}

export default Component;
