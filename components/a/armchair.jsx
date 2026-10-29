import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/h6hrqachx.css';
import '../../css/n/n1aa0zb2h.css';
import '../../css/o/oy6_5-8pf.css';
import '../../css/p/p1gc7mrvd.css';
import '../../css/w/wx3hk7bpo.css';
import '../../css/t/ty-2p4dqy.css';
import '../../css/a/axzrrmbfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="h6hrqachx wm-shadow"/><path class="n1aa0zb2h"/><path class="oy6_5-8pf"/><path class="p1gc7mrvd"/><path class="wx3hk7bpo"/><path class="ty-2p4dqy wm-shine"/><path class="axzrrmbfz wm-deco"/></g>`,
		"fallback": "withicons-sticker:armchair",
	});
}

export default Component;
