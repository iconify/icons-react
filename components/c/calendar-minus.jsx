import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/h/hd4mcy3oj.css';
import '../../css/a/a22d_t6di.css';
import '../../css/j/jz5jhdb_f.css';
import '../../css/h/h60cc0c-h.css';
import '../../css/b/b2pgg7vuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJVk3Ybng" x1="9" x2="15" y1="2.01" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGJVk3Ybng)" class="hd4mcy3oj"/><path class="a22d_t6di wm-a"/><path class="jz5jhdb_f wm-shine"/><path class="h60cc0c-h wm-shine"/><path class="b2pgg7vuf wm-shine"/></g>`,
		"fallback": "withicons-utsav:calendar-minus",
	});
}

export default Component;
