import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hxiasq3pp.css';
import '../../css/n/ntffncbfp.css';
import '../../css/y/y0x7avbpd.css';
import '../../css/w/w4e4tsbdn.css';
import '../../css/v/vde11bcyd.css';
import '../../css/y/yxsht_gsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hxiasq3pp wm-shadow"/><path class="ntffncbfp"/><path class="y0x7avbpd"/><path class="w4e4tsbdn"/><path class="vde11bcyd"/><path class="yxsht_gsr"/></g>`,
		"fallback": "withicons-retro:clipboard-x",
	});
}

export default Component;
