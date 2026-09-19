import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a0590yb_e.css';
import '../../css/d/dlqo3sjjv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a0590yb_e"/><path class="dlqo3sjjv"/></g>`,
		"fallback": "glyphs-poly:droplet",
	});
}

export default Component;
