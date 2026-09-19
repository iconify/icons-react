import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hdhkjuint.css';
import '../../css/f/fwk2_2b-q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hdhkjuint"/><path class="fwk2_2b-q"/></g>`,
		"fallback": "glyphs:arrow-round-duo",
	});
}

export default Component;
