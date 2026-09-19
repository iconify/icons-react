import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xu2hubcwa.css';
import '../../css/f/fc-f16bov.css';
import '../../css/u/u_2b3msej.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xu2hubcwa"/><path class="fc-f16bov"/><path class="u_2b3msej"/></g>`,
		"fallback": "glyphs:copy-1-duo",
	});
}

export default Component;
