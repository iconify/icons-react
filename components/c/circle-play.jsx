import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pkgr03atr.css';
import '../../css/m/m1y1q9lxd.css';
import '../../css/e/eeq63qngk.css';
import '../../css/l/ls5fn4zfl.css';
import '../../css/o/oz9fb5biz.css';
import '../../css/f/fpr348e2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="pkgr03atr wm-shadow"/><path class="m1y1q9lxd"/><path class="eeq63qngk"/><path class="ls5fn4zfl"/><path class="oz9fb5biz wm-shine"/><path class="fpr348e2o wm-deco"/></g>`,
		"fallback": "withicons-sticker:circle-play",
	});
}

export default Component;
