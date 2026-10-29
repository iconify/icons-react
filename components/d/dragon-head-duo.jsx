import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gj2odqpwr.css';
import '../../css/p/p8gva4w8l.css';
import '../../css/l/lcg6vo_kn.css';
import '../../css/m/mqoz6abpg.css';
import '../../css/c/ce8v7fi_v.css';
import '../../css/q/q6oaybc9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gj2odqpwr"/><path class="p8gva4w8l wm-s"/><path class="lcg6vo_kn"/><path class="mqoz6abpg wm-a"/><path class="ce8v7fi_v"/><path class="q6oaybc9d wm-a"/></g>`,
		"fallback": "withicons:dragon-head-duo",
	});
}

export default Component;
