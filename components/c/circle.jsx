import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pkgr03atr.css';
import '../../css/m/m1y1q9lxd.css';
import '../../css/v/v8v7tyfnz.css';
import '../../css/h/hjoig51ve.css';
import '../../css/x/xrskn9wll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="pkgr03atr wm-shadow"/><path class="m1y1q9lxd"/><path class="v8v7tyfnz"/><path class="hjoig51ve"/><path class="wm-deco xrskn9wll"/></g>`,
		"fallback": "withicons-sticker:circle",
	});
}

export default Component;
