import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/ymop90b_a.css';
import '../../css/v/v72iqib4f.css';
import '../../css/k/kuzwl3l1c.css';
import '../../css/x/xb7j1ccug.css';
import '../../css/x/xb0k1wbpw.css';
import '../../css/h/htloyjbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow ymop90b_a"/><path class="v72iqib4f"/><path class="kuzwl3l1c"/><path class="xb7j1ccug"/><path class="wm-shine xb0k1wbpw"/><path class="htloyjbpv wm-deco"/></g>`,
		"fallback": "withicons-sticker:cloud",
	});
}

export default Component;
