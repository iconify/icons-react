import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rluzi40lc.css';
import '../../css/b/b6zwclb8n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rluzi40lc"/><path class="b6zwclb8n"/></g>`,
		"fallback": "glyphs:cloudy-outline",
	});
}

export default Component;
