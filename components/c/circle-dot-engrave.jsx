import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k-3c8sbrm.css';
import '../../css/o/o7rikdrfu.css';
import '../../css/h/hm9dey-ai.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/h/huktpebgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="k-3c8sbrm wm-k"/><path class="o7rikdrfu wm-a"/><path class="hm9dey-ai wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="huktpebgs wm-a"/></g>`,
		"fallback": "withicons:circle-dot-engrave",
	});
}

export default Component;
