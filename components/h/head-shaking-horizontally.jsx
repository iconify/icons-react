import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipnkxrb8f.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/fhxx06rev.css';
import '../../css/m/mn1g5za9c.css';
import '../../css/u/u61sssbxb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ipnkxrb8f"/><g class="jn8qy4bru"><path class="fhxx06rev"/><path class="mn1g5za9c"/><path class="u61sssbxb"/></g>`,
		"fallback": "openmoji:head-shaking-horizontally",
	});
}

export default Component;
