import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fohb7689w.css';
import '../../css/o/ozhox9e-d.css';
import '../../css/p/p4b-8obnr.css';
import '../../css/t/tbbshccdj.css';
import '../../css/h/h9hqozbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="fohb7689w"/><path class="ozhox9e-d wm-shine"/><path class="p4b-8obnr wm-k"/><path class="tbbshccdj wm-a"/><path class="h9hqozbfx wm-deco"/></g>`,
		"fallback": "withicons-kawaii:ear",
	});
}

export default Component;
