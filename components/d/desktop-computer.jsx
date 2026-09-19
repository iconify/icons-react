import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/koqcrnrzm.css';
import '../../css/r/r0t_e0upp.css';
import '../../css/h/hyw65wb2i.css';
import '../../css/m/mx9ayjb_q.css';
import '../../css/r/rr0_8uo4p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="koqcrnrzm"/><path class="r0t_e0upp"/><path class="hyw65wb2i"/><path class="mx9ayjb_q"/><path class="rr0_8uo4p"/></g>`,
		"fallback": "fluent-emoji-flat:desktop-computer",
	});
}

export default Component;
