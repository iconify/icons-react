import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/b_8ws_b-d.css';
import '../../css/o/os4en2bab.css';
import '../../css/g/guhdjvb1k.css';
import '../../css/w/wry2p0e7p.css';
import '../../css/b/bg9kjcc1d.css';
import '../../css/h/hyq06acai.css';
import '../../css/p/pqrf1clwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="b_8ws_b-d wm-deco"/><path class="os4en2bab wm-deco"/><path class="guhdjvb1k wm-deco"/><path class="wm-k wry2p0e7p"/><path class="bg9kjcc1d wm-a"/><path class="hyq06acai wm-k"/><path class="pqrf1clwx wm-a"/></g>`,
		"fallback": "withicons:chopsticks-blueprint",
	});
}

export default Component;
