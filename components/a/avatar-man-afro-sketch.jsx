import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ev6ijubpd.css';
import '../../css/h/hm6zcabmy.css';
import '../../css/u/u1-3bgbet.css';
import '../../css/n/nemtfibtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ev6ijubpd wm-k"/><path class="hm6zcabmy wm-a"/><path class="u1-3bgbet wm-k"/><path class="nemtfibtm wm-a"/></g>`,
		"fallback": "withicons:avatar-man-afro-sketch",
	});
}

export default Component;
