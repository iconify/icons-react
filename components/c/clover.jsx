import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kop-sm9sr.css';
import '../../css/g/g_bgmwb9s.css';
import '../../css/f/frdgtlb6d.css';
import '../../css/p/pes6c5b0a.css';
import '../../css/k/kftjy4byn.css';
import '../../css/k/kn-1y6pge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="kop-sm9sr wm-shadow"/><path class="g_bgmwb9s"/><path class="frdgtlb6d"/><path class="pes6c5b0a"/><path class="kftjy4byn"/><path class="kn-1y6pge wm-deco"/></g>`,
		"fallback": "withicons-sticker:clover",
	});
}

export default Component;
