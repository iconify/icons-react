import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g0ygl7brh.css';
import '../../css/h/h_luhebxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g0ygl7brh"/><path class="h_luhebxu"/></g>`,
		"fallback": "reicon:backward-item2",
	});
}

export default Component;
