import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hm2vo1b0z.css';
import '../../css/t/tbdw6sa0q.css';
import '../../css/y/yfdct_b5e.css';
import '../../css/a/avxkvvbkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hm2vo1b0z wm-k"/><path class="tbdw6sa0q wm-k"/><path class="wm-k yfdct_b5e"/><path class="avxkvvbkc wm-k"/></g>`,
		"fallback": "withicons:avatar-person-glasses-sketch",
	});
}

export default Component;
