import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hx69_kbqc.css';
import '../../css/i/ir6vg8bfg.css';
import '../../css/q/q57frabsb.css';
import '../../css/r/ri6-66b8q.css';
import '../../css/c/cx88pl2gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hx69_kbqc wm-k"/><path class="ir6vg8bfg wm-k"/><path class="q57frabsb"/><path class="ri6-66b8q"/><path class="cx88pl2gf wm-s"/></g>`,
		"fallback": "withicons-bauhaus:champagne-toast",
	});
}

export default Component;
