import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/glhb5bbmp.css';
import '../../css/n/nkbt2_byc.css';
import '../../css/n/nxs9evbut.css';
import '../../css/a/acoeud07z.css';
import '../../css/d/ddupfj10w.css';
import '../../css/u/usyb2xbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="glhb5bbmp wm-shadow"/><path class="nkbt2_byc"/><path class="nxs9evbut"/><path class="acoeud07z"/><path class="ddupfj10w wm-shine"/><path class="usyb2xbzn wm-deco"/></g>`,
		"fallback": "withicons-sticker:candy-cane",
	});
}

export default Component;
