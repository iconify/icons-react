import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/ohuffjtyw.css';
import '../../css/e/e1-igfbjx.css';
import '../../css/k/k2nqr3qwy.css';
import '../../css/m/mb8e5acns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ohuffjtyw"/><path class="e1-igfbjx wm-k"/><path class="k2nqr3qwy wm-k"/><path class="mb8e5acns wm-a"/></g>`,
		"fallback": "withicons:baby-bottle-sketch",
	});
}

export default Component;
