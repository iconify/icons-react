import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/l7xkddbwv.css';
import '../../css/n/nng5iyb4r.css';
import '../../css/v/v4q_n0bwt.css';
import '../../css/d/d95wkdbjr.css';
import '../../css/s/s1nr6y-oz.css';
import '../../css/n/nw1cf7emz.css';
import '../../css/p/poryk3pbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="l7xkddbwv wm-shadow"/><path class="nng5iyb4r"/><path class="v4q_n0bwt"/><path class="d95wkdbjr"/><path class="s1nr6y-oz"/><path class="nw1cf7emz wm-shine"/><path class="poryk3pbj wm-deco"/></g>`,
		"fallback": "withicons-sticker:image",
	});
}

export default Component;
