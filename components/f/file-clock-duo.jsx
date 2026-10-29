import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i5i5n8baq.css';
import '../../css/f/fvp0h1bsk.css';
import '../../css/h/hl1gxsb1a.css';
import '../../css/w/wti3g3byz.css';
import '../../css/u/ux2p9gb1d.css';
import '../../css/z/z4bbp2bhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="i5i5n8baq"/><path class="fvp0h1bsk wm-s"/><path class="hl1gxsb1a wm-s"/><path class="wm-s wti3g3byz"/><path class="ux2p9gb1d"/><path class="wm-a z4bbp2bhq"/></g>`,
		"fallback": "withicons:file-clock-duo",
	});
}

export default Component;
