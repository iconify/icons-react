import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/h503bgfiu.css';
import '../../css/n/n0_e-dbzm.css';
import '../../css/z/z_0qjmkae.css';
import '../../css/y/y0swl1beo.css';
import '../../css/i/igxo-ubnw.css';
import '../../css/k/kn6ik1w-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="h503bgfiu wm-shadow"/><path class="n0_e-dbzm"/><path class="z_0qjmkae"/><path class="y0swl1beo"/><path class="igxo-ubnw wm-shine"/><path class="kn6ik1w-e wm-deco"/></g>`,
		"fallback": "withicons-sticker:chevrons-down",
	});
}

export default Component;
