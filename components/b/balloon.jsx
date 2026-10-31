import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/lcb2wwwpz.css';
import '../../css/l/lv7htgbxr.css';
import '../../css/c/c6bzyqbke.css';
import '../../css/k/kl56jmaqc.css';
import '../../css/l/lu_jwkbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="lcb2wwwpz"/><path class="lv7htgbxr wm-shine"/><path class="c6bzyqbke wm-k"/><path class="kl56jmaqc wm-a"/><path class="lu_jwkbsc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:balloon",
	});
}

export default Component;
