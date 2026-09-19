import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amxpew0mr.css';
import '../../css/e/eqjfspbja.css';
import '../../css/s/sms_g5bxs.css';
import '../../css/y/yqz8b778s.css';
import '../../css/n/nnorh4bnz.css';
import '../../css/n/npcoi3bpu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amxpew0mr"/><path class="eqjfspbja"/><path class="sms_g5bxs"/><path class="yqz8b778s"/><path class="nnorh4bnz"/><path class="npcoi3bpu"/>`,
		"fallback": "fxemoji:goat",
	});
}

export default Component;
