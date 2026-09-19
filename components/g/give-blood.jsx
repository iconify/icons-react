import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rph32v7sd.css';
import '../../css/m/m3fv-ubzq.css';
import '../../css/w/wxoejbcpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rph32v7sd"/><path class="m3fv-ubzq"/><path class="wxoejbcpk"/></g>`,
		"fallback": "hugeicons:give-blood",
	});
}

export default Component;
