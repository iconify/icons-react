import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q2dc5gbln.css';
import '../../css/q/qpzntcg6x.css';
import '../../css/a/aalr8-b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="q2dc5gbln"/><path class="qpzntcg6x wm-a"/><path class="aalr8-b6s wm-s"/></g>`,
		"fallback": "withicons:alarm-clock-off-solid",
	});
}

export default Component;
