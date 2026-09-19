import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iysf4jv4i.css';
import '../../css/l/lrx_ag2ld.css';
import '../../css/u/u7alcxwrl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iysf4jv4i"/><path class="lrx_ag2ld"/><path class="u7alcxwrl"/></g>`,
		"fallback": "glyphs-poly:crosshairs",
	});
}

export default Component;
