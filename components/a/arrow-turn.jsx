import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o87de5lat.css';
import '../../css/q/q2hb7y8hf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o87de5lat"/><path class="q2hb7y8hf"/></g>`,
		"fallback": "glyphs-poly:arrow-turn",
	});
}

export default Component;
