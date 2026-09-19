import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/i3e6hgbwp.css';
import '../../css/p/p1izkfbzs.css';
import '../../css/v/v1r7_u2fb.css';
import '../../css/o/o3-oz1ymj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="i3e6hgbwp"/><path class="p1izkfbzs"/><path class="v1r7_u2fb"/><path class="o3-oz1ymj"/></g>`,
		"fallback": "icon-park:bless",
	});
}

export default Component;
