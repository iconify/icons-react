import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/spin9_bwp.css';
import '../../css/y/yxesn464s.css';
import '../../css/f/fcx47xikt.css';
import '../../css/l/lqw4xwbkq.css';
import '../../css/o/otcq8cr0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="spin9_bwp"/><path class="wm-k yxesn464s"/><path class="fcx47xikt wm-a"/><path class="lqw4xwbkq wm-k"/><path class="otcq8cr0s wm-a"/></g>`,
		"fallback": "withicons:crown-sketch",
	});
}

export default Component;
