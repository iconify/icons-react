import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/od1pjlbrn.css';
import '../../css/a/akiqotlgz.css';
import '../../css/h/hmemabbvr.css';
import '../../css/k/k2u-005rj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="od1pjlbrn wm-k"/><path class="akiqotlgz wm-a"/><path class="hmemabbvr wm-k"/><path class="k2u-005rj wm-a"/></g>`,
		"fallback": "withicons:cast-sketch",
	});
}

export default Component;
