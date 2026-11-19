import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvfmnjb6v.css';
import '../../css/h/h1y4n0biy.css';
import '../../css/p/pxr9mrjbf.css';
import '../../css/j/j66xfzb6f.css';
import '../../css/y/ysssou8ru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xvfmnjb6v"/><path class="h1y4n0biy"/><path class="pxr9mrjbf"/><path class="j66xfzb6f"/><path class="ysssou8ru"/></g>`,
		"fallback": "andrsrxn:house-night",
	});
}

export default Component;
