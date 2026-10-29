import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/aaigf9ibc.css';
import '../../css/t/t7f64ktnn.css';
import '../../css/b/b7-qeobcm.css';
import '../../css/m/mpz8mvxod.css';
import '../../css/v/v-i0xvbke.css';
import '../../css/a/akvr8ibym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="aaigf9ibc wm-shadow"/><path class="t7f64ktnn"/><path class="b7-qeobcm"/><path class="mpz8mvxod"/><path class="v-i0xvbke wm-shine"/><path class="akvr8ibym wm-deco"/></g>`,
		"fallback": "withicons-sticker:corner-down-left",
	});
}

export default Component;
