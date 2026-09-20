import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u8pbwjc.css';
import '../../css/x/xeol2jbkb.css';
import '../../css/f/fd43s_bbr.css';
import '../../css/a/azhho7wuh.css';
import '../../css/x/x_jk5skxt.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/y/yi7mrfbdb.css';
import '../../css/w/wxioh0ndr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x4u8pbwjc"><path class="xeol2jbkb"/><path class="fd43s_bbr"/><path class="azhho7wuh"/><path class="x_jk5skxt"/></g><g class="ij2x_72vy"><path class="yi7mrfbdb"/><path class="wxioh0ndr"/></g>`,
		"fallback": "openmoji:backhand-index-pointing-right",
	});
}

export default Component;
