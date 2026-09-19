import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ifsg6uogp.css';
import '../../css/g/gpbr3bbyv.css';
import '../../css/m/m-yr_xb4u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ifsg6uogp"/><path class="gpbr3bbyv"/><path class="m-yr_xb4u"/></g>`,
		"fallback": "fluent-emoji-high-contrast:farmer",
	});
}

export default Component;
