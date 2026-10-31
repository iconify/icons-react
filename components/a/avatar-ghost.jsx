import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gzjvazbtc.css';
import '../../css/e/ekn5p9bfv.css';
import '../../css/b/bb9p1y-zf.css';
import '../../css/q/qqhz8pj5r.css';
import '../../css/e/e36iblb_o.css';
import '../../css/b/bxwj4cb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gzjvazbtc wm-shadow"/><path class="ekn5p9bfv"/><path class="bb9p1y-zf"/><path class="qqhz8pj5r"/><path class="e36iblb_o"/><path class="bxwj4cb5c"/></g>`,
		"fallback": "withicons-retro:avatar-ghost",
	});
}

export default Component;
