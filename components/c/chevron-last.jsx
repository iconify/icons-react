import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dagnp97jn.css';
import '../../css/q/q0y9u0bct.css';
import '../../css/m/mcwp8kbuw.css';
import '../../css/h/hmaf7acek.css';
import '../../css/l/l849fw07m.css';
import '../../css/j/jy843347v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="dagnp97jn wm-shadow"/><path class="q0y9u0bct"/><path class="mcwp8kbuw"/><path class="hmaf7acek"/><path class="l849fw07m wm-shine"/><path class="jy843347v wm-deco"/></g>`,
		"fallback": "withicons-sticker:chevron-last",
	});
}

export default Component;
