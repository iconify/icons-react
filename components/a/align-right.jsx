import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pdj6c625a.css';
import '../../css/w/wcm-fbche.css';
import '../../css/l/l1mzexbow.css';
import '../../css/i/ii492-bgl.css';
import '../../css/e/ebgwytbri.css';
import '../../css/l/latagnvgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="pdj6c625a wm-shadow"/><path class="wcm-fbche"/><path class="l1mzexbow"/><path class="ii492-bgl"/><path class="ebgwytbri wm-shine"/><path class="latagnvgw wm-deco"/></g>`,
		"fallback": "withicons-sticker:align-right",
	});
}

export default Component;
