import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dxhtvibdw.css';
import '../../css/o/o_lv49bdx.css';
import '../../css/q/qkuxb2bmr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dxhtvibdw"/><path class="o_lv49bdx"/><path class="qkuxb2bmr"/></g>`,
		"fallback": "fluent-emoji-flat:clutch-bag",
	});
}

export default Component;
