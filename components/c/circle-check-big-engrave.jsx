import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q0zjfeb9r.css';
import '../../css/k/kz6nbfeim.css';
import '../../css/u/ucexqlbld.css';
import '../../css/l/ly5598bwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="q0zjfeb9r wm-k"/><path class="kz6nbfeim wm-shadow"/><path class="ucexqlbld wm-k"/><path class="ly5598bwp wm-a"/></g>`,
		"fallback": "withicons:circle-check-big-engrave",
	});
}

export default Component;
