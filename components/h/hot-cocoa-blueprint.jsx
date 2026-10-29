import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/n3nro655v.css';
import '../../css/d/dnj4ybb5y.css';
import '../../css/u/uw31rn9nj.css';
import '../../css/o/o7ull5bnt.css';
import '../../css/v/vu3k_039v.css';
import '../../css/z/zp1t379qi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="n3nro655v wm-deco"/><path class="dnj4ybb5y wm-deco"/><path class="uw31rn9nj wm-deco"/><path class="o7ull5bnt wm-k"/><path class="vu3k_039v wm-a"/><path class="wm-s zp1t379qi"/></g>`,
		"fallback": "withicons:hot-cocoa-blueprint",
	});
}

export default Component;
