import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wlhhizb-a.css';
import '../../css/j/jbb3wybwz.css';
import '../../css/y/y95e736dh.css';
import '../../css/l/lhrvykz_k.css';
import '../../css/n/njwcjnxjo.css';
import '../../css/k/kim68mbzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wlhhizb-a wm-shadow"/><path class="jbb3wybwz"/><path class="y95e736dh"/><path class="lhrvykz_k"/><path class="njwcjnxjo wm-shine"/><path class="kim68mbzg wm-deco"/></g>`,
		"fallback": "withicons-sticker:bot-message-square",
	});
}

export default Component;
