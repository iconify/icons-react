import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li-wnqc2e.css';
import '../../css/z/zp_9cf7dd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="li-wnqc2e"/><path class="zp_9cf7dd"/></g>`,
		"fallback": "glyphs-poly:distribute-items",
	});
}

export default Component;
