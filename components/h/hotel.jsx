import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h0tq4hvtq.css';
import '../../css/d/d3_wcs55v.css';
import '../../css/u/usc59bjvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="h0tq4hvtq"/><path class="d3_wcs55v"/><path class="usc59bjvb"/></g>`,
		"fallback": "iconaut:hotel",
	});
}

export default Component;
