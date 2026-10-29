import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/ziiwtxl1s.css';
import '../../css/q/q4lh_hb6d.css';
import '../../css/c/cd16omk9a.css';
import '../../css/q/qz-3_0bjm.css';
import '../../css/y/yr2pvkloa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ziiwtxl1s"/><path class="q4lh_hb6d wm-a"/><path class="cd16omk9a wm-a"/><path class="qz-3_0bjm"/><path class="wm-a yr2pvkloa"/></g>`,
		"fallback": "withicons:bird-duo",
	});
}

export default Component;
