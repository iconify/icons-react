import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rytkakboz.css';
import '../../css/n/n04szjpnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rytkakboz"/><path class="n04szjpnk"/></g>`,
		"fallback": "mynaui:clock-10",
	});
}

export default Component;
