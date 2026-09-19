import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rh2qa1bdu.css';
import '../../css/a/ahyxv_b2m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rh2qa1bdu"/><path class="ahyxv_b2m"/></g>`,
		"fallback": "glyphs:fog-1-outline",
	});
}

export default Component;
