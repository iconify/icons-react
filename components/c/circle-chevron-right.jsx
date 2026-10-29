import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pkgr03atr.css';
import '../../css/m/m1y1q9lxd.css';
import '../../css/i/iywf9uhzx.css';
import '../../css/e/edvj_1ebk.css';
import '../../css/o/oz9fb5biz.css';
import '../../css/r/r186s1bzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="pkgr03atr wm-shadow"/><path class="m1y1q9lxd"/><path class="iywf9uhzx"/><path class="edvj_1ebk"/><path class="oz9fb5biz wm-shine"/><path class="r186s1bzo wm-deco"/></g>`,
		"fallback": "withicons-sticker:circle-chevron-right",
	});
}

export default Component;
