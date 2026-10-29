import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/ch_0tkbkt.css';
import '../../css/n/nsf_xvbsa.css';
import '../../css/m/mqp_bhb9q.css';
import '../../css/w/wixddpymo.css';
import '../../css/v/veqt9jc2p.css';
import '../../css/o/oji-pf87i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ch_0tkbkt wm-shadow"/><path class="nsf_xvbsa"/><path class="mqp_bhb9q"/><path class="wixddpymo"/><path class="veqt9jc2p wm-shine"/><path class="oji-pf87i wm-deco"/></g>`,
		"fallback": "withicons-sticker:bookmark",
	});
}

export default Component;
