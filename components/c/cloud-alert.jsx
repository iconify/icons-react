import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/ymop90b_a.css';
import '../../css/v/v72iqib4f.css';
import '../../css/k/kuzwl3l1c.css';
import '../../css/c/cna4y7a6v.css';
import '../../css/m/m_nljsb7j.css';
import '../../css/h/htloyjbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow ymop90b_a"/><path class="v72iqib4f"/><path class="kuzwl3l1c"/><path class="cna4y7a6v"/><path class="m_nljsb7j wm-shine"/><path class="htloyjbpv wm-deco"/></g>`,
		"fallback": "withicons-sticker:cloud-alert",
	});
}

export default Component;
