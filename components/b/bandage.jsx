import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_wsw2bpr.css';
import '../../css/o/onui64bqd.css';
import '../../css/x/x0rnj5bau.css';
import '../../css/y/yj97kfb3c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="l_wsw2bpr"/><path class="onui64bqd"/><path clip-rule="evenodd" class="x0rnj5bau"/><path class="yj97kfb3c"/></g>`,
		"fallback": "glyphs-poly:bandage",
	});
}

export default Component;
