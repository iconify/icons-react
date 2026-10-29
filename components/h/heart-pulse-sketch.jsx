import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/ns06ew8yj.css';
import '../../css/y/yajyyvbsx.css';
import '../../css/f/fjo69vb2a.css';
import '../../css/n/nole5l7ip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ns06ew8yj wm-k"/><path class="wm-k yajyyvbsx"/><path class="fjo69vb2a wm-k"/><path class="nole5l7ip wm-a"/></g>`,
		"fallback": "withicons:heart-pulse-sketch",
	});
}

export default Component;
