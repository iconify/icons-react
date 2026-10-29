import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pkgr03atr.css';
import '../../css/m/m1y1q9lxd.css';
import '../../css/h/hoo4szbfk.css';
import '../../css/s/s-9kjfsra.css';
import '../../css/o/oz9fb5biz.css';
import '../../css/z/zy5wd1-0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="pkgr03atr wm-shadow"/><path class="m1y1q9lxd"/><path class="hoo4szbfk"/><path class="s-9kjfsra"/><path class="oz9fb5biz wm-shine"/><path class="wm-deco zy5wd1-0b"/></g>`,
		"fallback": "withicons-sticker:info-circle",
	});
}

export default Component;
