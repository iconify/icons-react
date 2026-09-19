import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0r8zfb_g.css';
import '../../css/w/wg308hmce.css';
import '../../css/j/juctupqno.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t0r8zfb_g"/><path clip-rule="evenodd" class="wg308hmce"/><path class="juctupqno"/></g>`,
		"fallback": "glyphs-poly:edit-1",
	});
}

export default Component;
