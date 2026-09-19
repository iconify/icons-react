import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lceo2ybkv.css';
import '../../css/h/hkb4kmbmc.css';
import '../../css/x/xrz9d4b_i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lceo2ybkv"/><path class="hkb4kmbmc"/><path class="xrz9d4b_i"/></g>`,
		"fallback": "et:compass",
	});
}

export default Component;
