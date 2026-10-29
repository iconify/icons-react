import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v4lrv2biy.css';
import '../../css/r/rm13uvhhl.css';
import '../../css/c/ckykf2bsg.css';
import '../../css/v/vewmsebxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v4lrv2biy wm-k"/><path class="rm13uvhhl wm-a"/><path class="ckykf2bsg wm-k"/><path class="vewmsebxy wm-a"/></g>`,
		"fallback": "withicons:bed-sketch",
	});
}

export default Component;
