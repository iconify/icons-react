import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g_rvqfhbi.css';
import '../../css/i/i3lux_m8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g_rvqfhbi"/><path class="i3lux_m8d"/></g>`,
		"fallback": "iconoir:crop-rotate-bl",
	});
}

export default Component;
