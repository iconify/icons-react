import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5k9mhbdo.css';
import '../../css/o/ob8xw0bkr.css';
import '../../css/r/r3s12lbsu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="e5k9mhbdo"/><path class="ob8xw0bkr"/><path class="r3s12lbsu"/></g>`,
		"fallback": "glyphs-poly:female",
	});
}

export default Component;
