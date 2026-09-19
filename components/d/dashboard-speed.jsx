import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yrry9wj2l.css';
import '../../css/t/tvzvrubjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yrry9wj2l"/><path class="tvzvrubjp"/></g>`,
		"fallback": "iconoir:dashboard-speed",
	});
}

export default Component;
