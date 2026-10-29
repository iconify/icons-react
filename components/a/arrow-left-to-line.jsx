import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/ocgpbpxpy.css';
import '../../css/o/oflqhobhm.css';
import '../../css/m/m5ls5gsdo.css';
import '../../css/k/kibsbqfpa.css';
import '../../css/u/ue54jactt.css';
import '../../css/y/ytv9pib4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ocgpbpxpy wm-shadow"/><path class="oflqhobhm"/><path class="m5ls5gsdo"/><path class="kibsbqfpa"/><path class="ue54jactt wm-shine"/><path class="wm-deco ytv9pib4p"/></g>`,
		"fallback": "withicons-sticker:arrow-left-to-line",
	});
}

export default Component;
