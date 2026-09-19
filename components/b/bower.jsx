import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/h3h8vqtwk.css';
import '../../css/m/mtpu2lbjs.css';
import '../../css/d/dijf3d1vx.css';
import '../../css/e/ec_958bcv.css';
import '../../css/t/t1feu8b3c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="h3h8vqtwk"/><path class="mtpu2lbjs"/><path class="dijf3d1vx"/><path class="ec_958bcv"/><path class="t1feu8b3c"/></g>`,
		"fallback": "catppuccin:bower",
	});
}

export default Component;
