import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/s2l7nm5ll.css';
import '../../css/h/hijd9prfl.css';
import '../../css/m/mo-o3pb_t.css';
import '../../css/r/runsd0bzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="s2l7nm5ll wm-shadow"/><path class="hijd9prfl wm-shadow"/><path class="mo-o3pb_t"/><path class="runsd0bzl"/></g>`,
		"fallback": "withicons-brutal:chevron-up",
	});
}

export default Component;
