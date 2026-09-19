import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/td8-cml1e.css';
import '../../css/b/bd43g5b1b.css';
import '../../css/i/ijzuod_0j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="td8-cml1e"/><path class="bd43g5b1b"/><path class="ijzuod_0j"/></g>`,
		"fallback": "glyphs:hourglass-50-duo",
	});
}

export default Component;
