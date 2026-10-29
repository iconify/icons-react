import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yfi9mw0on.css';
import '../../css/j/js1cg8hhl.css';
import '../../css/h/hg4aqjb-i.css';
import '../../css/s/srq0_1iwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="yfi9mw0on"/><path class="js1cg8hhl wm-a"/><path class="hg4aqjb-i wm-k"/><path class="srq0_1iwc wm-a"/></g>`,
		"fallback": "withicons:guitar-sketch",
	});
}

export default Component;
