import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/ssxi8fbrc.css';
import '../../css/v/vjzc1ab5s.css';
import '../../css/f/fg96gxcpy.css';
import '../../css/o/o3ggu3c5d.css';
import '../../css/l/lvilvpf8c.css';
import '../../css/u/u0ho0woqq.css';
import '../../css/u/uvvy6unui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ssxi8fbrc wm-shadow"/><path class="vjzc1ab5s wm-shadow"/><path class="fg96gxcpy"/><path class="o3ggu3c5d"/><path class="lvilvpf8c"/><path class="u0ho0woqq"/><path class="uvvy6unui"/></g>`,
		"fallback": "withicons-brutal:globe",
	});
}

export default Component;
