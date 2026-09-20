import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dd7i7tujc.css';
import '../../css/h/hllqu3y3o.css';
import '../../css/c/cam26hb3e.css';
import '../../css/o/olzj25b_f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dd7i7tujc"/><path class="hllqu3y3o"/><path class="cam26hb3e"/><path class="olzj25b_f"/></g>`,
		"fallback": "streamline-color:fireworks-rocket",
	});
}

export default Component;
