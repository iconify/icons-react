import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oy4egu67j.css';
import '../../css/e/ed6fslw1h.css';
import '../../css/w/w7ft8mb7g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oy4egu67j"/><path class="ed6fslw1h"/><path class="w7ft8mb7g"/></g>`,
		"fallback": "glyphs:bike-duo",
	});
}

export default Component;
