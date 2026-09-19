import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jc3njsbwv.css';
import '../../css/v/v_63r-bfn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jc3njsbwv"/><path class="v_63r-bfn"/></g>`,
		"fallback": "fluent-emoji-high-contrast:horizontal-traffic-light",
	});
}

export default Component;
