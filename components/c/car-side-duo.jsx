import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_mu90bzl.css';
import '../../css/a/aee-ic6wn.css';
import '../../css/v/v8xq717qa.css';
import '../../css/f/f_94ml52o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n_mu90bzl"/><path class="aee-ic6wn"/><path class="v8xq717qa"/><path class="f_94ml52o"/></g>`,
		"fallback": "glyphs:car-side-duo",
	});
}

export default Component;
