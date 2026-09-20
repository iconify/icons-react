import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf3u6-btt.css';
import '../../css/d/dcscq4zhc.css';
import '../../css/u/umtu9dbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf3u6-btt"/><path class="dcscq4zhc"/><path class="umtu9dbhb"/>`,
		"fallback": "mingcute:follow-line",
	});
}

export default Component;
