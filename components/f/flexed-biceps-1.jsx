import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvgdpzb2e.css';
import '../../css/z/zhyezzbvc.css';
import '../../css/q/q_ar9wbjj.css';
import '../../css/x/x0xfcvitb.css';
import '../../css/f/f9z5qtbuu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvgdpzb2e"/><path class="zhyezzbvc"/><path class="q_ar9wbjj"/><path class="x0xfcvitb"/><path class="f9z5qtbuu"/>`,
		"fallback": "streamline-emojis:flexed-biceps-1",
	});
}

export default Component;
