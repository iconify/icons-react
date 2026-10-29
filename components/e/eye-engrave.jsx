import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qdycs8m8j.css';
import '../../css/o/o409egb8b.css';
import '../../css/o/oqf382uiz.css';
import '../../css/h/hbi8hhkfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qdycs8m8j wm-k"/><path class="o409egb8b wm-shadow"/><path class="oqf382uiz wm-k"/><path class="hbi8hhkfx wm-a"/></g>`,
		"fallback": "withicons:eye-engrave",
	});
}

export default Component;
