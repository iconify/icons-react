import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tcmdo-xmr.css';
import '../../css/t/t8q5qtb_h.css';
import '../../css/j/j4f6dzbvb.css';
import '../../css/y/yd-a_v-ct.css';
import '../../css/n/n16lovbai.css';
import '../../css/q/qef_sobyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="tcmdo-xmr wm-shadow"/><path class="t8q5qtb_h"/><path class="j4f6dzbvb"/><path class="yd-a_v-ct"/><path class="n16lovbai wm-shine"/><path class="qef_sobyj wm-deco"/></g>`,
		"fallback": "withicons-sticker:calculator",
	});
}

export default Component;
