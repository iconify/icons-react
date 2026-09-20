import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4i32xbmp.css';
import '../../css/h/hs0i9ccsp.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/s/sr5zzomxa.css';
import '../../css/a/a_yqdob_i.css';
import '../../css/z/zxl-v6htc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4i32xbmp"/><circle class="hs0i9ccsp"/><g class="ij2x_72vy"><path class="sr5zzomxa"/><circle class="a_yqdob_i"/><path class="zxl-v6htc"/></g>`,
		"fallback": "openmoji:details",
	});
}

export default Component;
