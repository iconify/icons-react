import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h9ugfgb4b.css';
import '../../css/v/vcmiwv68k.css';
import '../../css/g/gvmxahb5u.css';
import '../../css/j/j5ce3sbao.css';
import '../../css/o/oivip8bjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="h9ugfgb4b wm-k"/><path class="vcmiwv68k wm-a"/><path class="gvmxahb5u wm-shadow"/><path class="j5ce3sbao wm-k"/><path class="oivip8bjf wm-a"/></g>`,
		"fallback": "withicons:bell-concierge-engrave",
	});
}

export default Component;
