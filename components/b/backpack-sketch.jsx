import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/naz7nhbla.css';
import '../../css/q/qwyktibri.css';
import '../../css/o/onacwcrjs.css';
import '../../css/p/px7dfaclp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="naz7nhbla"/><path class="qwyktibri wm-a"/><path class="onacwcrjs wm-k"/><path class="px7dfaclp wm-a"/></g>`,
		"fallback": "withicons:backpack-sketch",
	});
}

export default Component;
