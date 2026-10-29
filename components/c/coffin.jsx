import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nh4ys1byz.css';
import '../../css/g/gmsf2nbtz.css';
import '../../css/j/jen9usb8u.css';
import '../../css/f/f3qwnk_fw.css';
import '../../css/c/cq1r0xu7n.css';
import '../../css/w/wdphd8b3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="nh4ys1byz wm-shadow"/><path class="gmsf2nbtz"/><path class="jen9usb8u"/><path class="f3qwnk_fw"/><path class="cq1r0xu7n wm-shine"/><path class="wdphd8b3t wm-deco"/></g>`,
		"fallback": "withicons-sticker:coffin",
	});
}

export default Component;
