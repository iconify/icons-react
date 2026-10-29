import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i-n7_ob8i.css';
import '../../css/e/ew-660nvf.css';
import '../../css/a/a6wsivwnq.css';
import '../../css/v/v2_g7vh0j.css';
import '../../css/j/j4rbwib9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i-n7_ob8i wm-k"/><path class="ew-660nvf wm-a"/><path class="a6wsivwnq wm-shadow"/><path class="v2_g7vh0j wm-k"/><path class="j4rbwib9r wm-a"/></g>`,
		"fallback": "withicons:arrow-left-engrave",
	});
}

export default Component;
