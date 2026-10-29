import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xddy8fb2y.css';
import '../../css/p/pa-3jhbbm.css';
import '../../css/m/m1th99r3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="xddy8fb2y"/><path class="pa-3jhbbm wm-k"/><path class="m1th99r3a wm-a"/></g>`,
		"fallback": "withicons:avatar-panda-sketch",
	});
}

export default Component;
