import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mflv_mb5t.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fx4pxmbfy.css';
import '../../css/g/gjlcnxyxi.css';
import '../../css/s/ski-irbru.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kvt0yynll.css';
import '../../css/w/w5nm19nqr.css';
import '../../css/n/ngz5zbbtg.css';
import '../../css/q/q_yw93bsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGvt4Ydc2b" class="mflv_mb5t"/></defs><g class="t_2lkqbxb"><path class="fx4pxmbfy wm-shadow"/><path class="gjlcnxyxi"/><path class="ski-irbru"/><use href="#SVGvt4Ydc2b" class="d2kvgvbvc"/><path class="kvt0yynll"/><use href="#SVGvt4Ydc2b" class="d2kvgvbvc"/><path class="w5nm19nqr"/><path class="ngz5zbbtg"/><path class="q_yw93bsi wm-deco"/></g>`,
		"fallback": "withicons-sticker:dental-chair",
	});
}

export default Component;
