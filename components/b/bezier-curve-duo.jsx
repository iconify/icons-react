import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ymf4p-bux.css';
import '../../css/w/w7iq2h-ed.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ymf4p-bux"/><path class="w7iq2h-ed"/></g>`,
		"fallback": "glyphs:bezier-curve-duo",
	});
}

export default Component;
