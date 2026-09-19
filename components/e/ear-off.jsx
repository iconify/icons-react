import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cip_fwbtt.css';
import '../../css/f/fj36-4bau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cip_fwbtt"/><path class="fj36-4bau"/></g>`,
		"fallback": "hugeicons:ear-off",
	});
}

export default Component;
