import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/ky58d5mec.css';
import '../../css/d/dg4aqcb-n.css';
import '../../css/f/fj2wexb9r.css';
import '../../css/h/hh4wdobeb.css';
import '../../css/p/pzik5rbmc.css';
import '../../css/c/cplyi0b8x.css';
import '../../css/c/cclge1lip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ky58d5mec wm-shadow"/><path class="dg4aqcb-n"/><path class="fj2wexb9r"/><path class="hh4wdobeb"/><path class="pzik5rbmc wm-shine"/><path class="cplyi0b8x wm-deco"/><path class="cclge1lip wm-deco"/></g>`,
		"fallback": "withicons-sticker:footprints",
	});
}

export default Component;
