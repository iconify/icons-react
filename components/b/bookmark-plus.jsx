import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/ch_0tkbkt.css';
import '../../css/n/nsf_xvbsa.css';
import '../../css/v/vv38d_bbb.css';
import '../../css/o/o6-35gb7h.css';
import '../../css/m/m5uv2cc7x.css';
import '../../css/s/sjgcrcdjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ch_0tkbkt wm-shadow"/><path class="nsf_xvbsa"/><path class="vv38d_bbb"/><path class="o6-35gb7h"/><path class="m5uv2cc7x wm-shine"/><path class="sjgcrcdjv wm-deco"/></g>`,
		"fallback": "withicons-sticker:bookmark-plus",
	});
}

export default Component;
