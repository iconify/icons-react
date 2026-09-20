import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxf8azbfy.css';
import '../../css/w/wa36r8bnm.css';
import '../../css/d/dmx_tobyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lxf8azbfy"/><path clip-rule="evenodd" class="wa36r8bnm"/><path class="dmx_tobyi"/></g>`,
		"fallback": "reicon:bomb2-filled",
	});
}

export default Component;
