import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hwoxvnb5h.css';
import '../../css/z/zy6vbkbxh.css';
import '../../css/v/v8u8mm4xm.css';
import '../../css/q/qn79s9bck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hwoxvnb5h wm-k"/><path class="wm-a zy6vbkbxh"/><path class="v8u8mm4xm wm-k"/><path class="qn79s9bck wm-a"/></g>`,
		"fallback": "withicons:fence-sketch",
	});
}

export default Component;
