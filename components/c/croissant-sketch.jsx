import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/ld14kd3fo.css';
import '../../css/k/kj3ej9b7p.css';
import '../../css/h/hy_wfebxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ld14kd3fo wm-k"/><path class="kj3ej9b7p wm-k"/><path class="hy_wfebxz wm-a"/></g>`,
		"fallback": "withicons:croissant-sketch",
	});
}

export default Component;
