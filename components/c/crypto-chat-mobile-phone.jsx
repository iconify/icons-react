import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/c/cavew1bts.css';
import '../../css/i/icecplbee.css';
import '../../css/h/hn0-6lmiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="cavew1bts"/><path class="icecplbee"/><path class="hn0-6lmiz"/></g>`,
		"fallback": "streamline-ultimate:crypto-chat-mobile-phone",
	});
}

export default Component;
