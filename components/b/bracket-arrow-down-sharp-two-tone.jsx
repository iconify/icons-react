import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xw5t5ib4d.css';
import '../../css/s/sl7r712yx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xw5t5ib4d"/><path class="sl7r712yx"/></g>`,
		"fallback": "keyline-icons:bracket-arrow-down-sharp-two-tone",
	});
}

export default Component;
