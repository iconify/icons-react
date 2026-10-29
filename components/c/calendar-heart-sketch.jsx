import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w6cbm5j2m.css';
import '../../css/p/pi1r4w0tu.css';
import '../../css/l/l18g6rvik.css';
import '../../css/f/fpb6z7hji.css';
import '../../css/k/k0pmgqbjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="w6cbm5j2m"/><path class="pi1r4w0tu wm-k"/><path class="l18g6rvik wm-a"/><path class="fpb6z7hji wm-k"/><path class="k0pmgqbjw wm-a"/></g>`,
		"fallback": "withicons:calendar-heart-sketch",
	});
}

export default Component;
