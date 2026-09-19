import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qaiv0sbkl.css';
import '../../css/t/tvzvrubjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qaiv0sbkl"/><path class="tvzvrubjp"/></g>`,
		"fallback": "iconoir:dashboard-dots",
	});
}

export default Component;
