import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/c980lxbyn.css';
import '../../css/i/ihkdcxy8q.css';
import '../../css/m/m60o5obpu.css';
import '../../css/p/pvgdlrbxh.css';
import '../../css/n/n6nprbc3y.css';
import '../../css/g/g3c_9sbwy.css';
import '../../css/z/z-y2ghb5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="c980lxbyn wm-shadow"/><path class="ihkdcxy8q"/><path class="m60o5obpu"/><path class="pvgdlrbxh"/><path class="n6nprbc3y"/><path class="g3c_9sbwy wm-shine"/><path class="wm-deco z-y2ghb5q"/></g>`,
		"fallback": "withicons-sticker:cloud-moon",
	});
}

export default Component;
