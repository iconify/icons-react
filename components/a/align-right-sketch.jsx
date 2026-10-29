import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ed_4l_bdm.css';
import '../../css/b/b-p_nwbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ed_4l_bdm"/><path class="b-p_nwbdd"/></g>`,
		"fallback": "withicons:align-right-sketch",
	});
}

export default Component;
