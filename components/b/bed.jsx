import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7kc_s51c.css';
import '../../css/r/rgcaz9bqd.css';
import '../../css/h/hw-s9nbyd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h7kc_s51c"/><path class="rgcaz9bqd"/><path class="hw-s9nbyd"/></g>`,
		"fallback": "glyphs-poly:bed",
	});
}

export default Component;
