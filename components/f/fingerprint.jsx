import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/yxfscxvbw.css';
import '../../css/l/lfwinvqin.css';
import '../../css/b/bp35_gboy.css';
import '../../css/n/ngp0u6btv.css';
import '../../css/v/vsr8ogweh.css';
import '../../css/g/g4jl-u_xd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow yxfscxvbw"/><path class="lfwinvqin"/><path class="bp35_gboy"/><path class="ngp0u6btv"/><path class="vsr8ogweh wm-shine"/><path class="g4jl-u_xd wm-deco"/></g>`,
		"fallback": "withicons-sticker:fingerprint",
	});
}

export default Component;
