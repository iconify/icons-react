import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_b8-8a_m.css';
import '../../css/y/ydl-jxb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_b8-8a_m"/><path class="ydl-jxb3m"/>`,
		"fallback": "eos-icons:activate-subscriptions-outlined",
	});
}

export default Component;
