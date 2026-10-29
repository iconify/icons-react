import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v65z5be8c.css';
import '../../css/o/o19bcrb8v.css';
import '../../css/d/d87ng64hw.css';
import '../../css/e/exthxrocb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v65z5be8c"/><path class="o19bcrb8v wm-a"/><path class="d87ng64hw wm-k"/><path class="exthxrocb wm-a"/></g>`,
		"fallback": "withicons:folder-check-sketch",
	});
}

export default Component;
