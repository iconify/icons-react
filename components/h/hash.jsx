import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/n5j_g1zpj.css';
import '../../css/e/eqtbc-62s.css';
import '../../css/n/ntj6owbdj.css';
import '../../css/q/q0q8_j-xl.css';
import '../../css/f/fbmgi6ztf.css';
import '../../css/r/r186s1bzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="n5j_g1zpj wm-shadow"/><path class="eqtbc-62s"/><path class="ntj6owbdj"/><path class="q0q8_j-xl"/><path class="fbmgi6ztf wm-shine"/><path class="r186s1bzo wm-deco"/></g>`,
		"fallback": "withicons-sticker:hash",
	});
}

export default Component;
