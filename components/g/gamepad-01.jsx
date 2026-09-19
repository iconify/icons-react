import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/keekzqquq.css';
import '../../css/x/xhp8subet.css';
import '../../css/j/j3bdxnbqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="keekzqquq"/><path class="xhp8subet"/><path class="j3bdxnbqp"/></g>`,
		"fallback": "hugeicons:gamepad-01",
	});
}

export default Component;
