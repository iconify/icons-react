import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x0hdwdb7p.css';
import '../../css/h/hyfam9bue.css';
import '../../css/j/j5i5x0bdb.css';
import '../../css/f/f467v-_hb.css';
import '../../css/u/ua4xvhoij.css';
import '../../css/o/o077ofbzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow x0hdwdb7p"/><path class="hyfam9bue"/><path class="j5i5x0bdb"/><path class="f467v-_hb"/><path class="ua4xvhoij"/><path class="o077ofbzm"/></g>`,
		"fallback": "withicons-retro:cactus",
	});
}

export default Component;
