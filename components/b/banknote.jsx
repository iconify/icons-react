import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lo2k1tdyo.css';
import '../../css/c/ciodw9i1n.css';
import '../../css/m/mjt_pfbkn.css';
import '../../css/l/l8c0kkb0x.css';
import '../../css/n/nzsljnksw.css';
import '../../css/a/aexe23bqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="lo2k1tdyo wm-shadow"/><path class="ciodw9i1n"/><path class="mjt_pfbkn"/><path class="l8c0kkb0x"/><path class="nzsljnksw wm-shine"/><path class="aexe23bqk wm-deco"/></g>`,
		"fallback": "withicons-sticker:banknote",
	});
}

export default Component;
