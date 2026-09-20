import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vda9rfbmq.css';
import '../../css/w/w48x_3bbu.css';
import '../../css/l/l81713mvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vda9rfbmq"/><path class="w48x_3bbu"/><path class="l81713mvo"/></g>`,
		"fallback": "streamline-ultimate:android-1",
	});
}

export default Component;
