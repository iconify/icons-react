import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/f_d03t8ud.css';
import '../../css/r/r39s_1v-s.css';
import '../../css/d/dtoar_7ma.css';
import '../../css/d/dctbr5ngc.css';
import '../../css/c/ctsqbjb_j.css';
import '../../css/j/jn01vtjva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="f_d03t8ud wm-shadow"/><path class="r39s_1v-s"/><path class="dtoar_7ma"/><path class="dctbr5ngc"/><path class="ctsqbjb_j wm-shine"/><path class="jn01vtjva wm-deco"/></g>`,
		"fallback": "withicons-sticker:code-xml",
	});
}

export default Component;
