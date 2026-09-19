import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ld4pzsb1u.css';
import '../../css/n/n-b16tn_b.css';
import '../../css/k/k5759bbnk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ld4pzsb1u"/><path class="n-b16tn_b"/><path class="k5759bbnk"/></g>`,
		"fallback": "glyphs:building-2-duo",
	});
}

export default Component;
