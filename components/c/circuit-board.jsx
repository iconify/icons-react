import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wnxlphb_i.css';
import '../../css/l/lxh99mb5z.css';
import '../../css/l/lg-8n1num.css';
import '../../css/l/lj3mi6b8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wnxlphb_i"/><path class="lxh99mb5z wm-shine"/><path class="lg-8n1num wm-k"/><path class="lj3mi6b8m wm-a"/></g>`,
		"fallback": "withicons-kawaii:circuit-board",
	});
}

export default Component;
