import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qzg7_0n5n.css';
import '../../css/e/e-03izbfa.css';
import '../../css/q/q9ldof2um.css';
import '../../css/n/nnnwjibgk.css';
import '../../css/m/mqvh0tbrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qzg7_0n5n"/><path class="e-03izbfa wm-k"/><path class="q9ldof2um wm-a"/><path class="nnnwjibgk wm-k"/><path class="mqvh0tbrc wm-a"/></g>`,
		"fallback": "withicons:hospital-sketch",
	});
}

export default Component;
