import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j_gfjlg0v.css';
import '../../css/w/w7dtdjb0l.css';
import '../../css/t/t4jvu4b4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="j_gfjlg0v"/><path class="w7dtdjb0l wm-k"/><path class="t4jvu4b4x wm-a"/></g>`,
		"fallback": "withicons:boxes-sketch",
	});
}

export default Component;
