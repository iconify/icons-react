import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w15pyh0ky.css';
import '../../css/i/ierl1fbwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w15pyh0ky"/><path class="ierl1fbwu"/></g>`,
		"fallback": "hugeicons:car-signal",
	});
}

export default Component;
