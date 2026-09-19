import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rz_om1bqa.css';
import '../../css/m/mo85ezbja.css';
import '../../css/n/nii-7g3eu.css';
import '../../css/k/k4l1a_btn.css';
import '../../css/w/w5z09phlo.css';
import '../../css/x/xw2k72b5b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rz_om1bqa"/><path class="mo85ezbja"/><path class="nii-7g3eu"/><path class="k4l1a_btn"/><path class="w5z09phlo"/><path class="xw2k72b5b"/></g>`,
		"fallback": "fluent-emoji-flat:bookmark-tabs",
	});
}

export default Component;
