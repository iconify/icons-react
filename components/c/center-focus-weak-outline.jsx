import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qwbkvzbum.css';
import '../../css/w/wru2hjbce.css';
import '../../css/w/w9zvo0bsa.css';
import '../../css/r/r4qpo7nqr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qwbkvzbum"/><path clip-rule="evenodd" class="wru2hjbce"/><path class="w9zvo0bsa"/><path clip-rule="evenodd" class="r4qpo7nqr"/></g>`,
		"fallback": "glyphs:center-focus-weak-outline",
	});
}

export default Component;
