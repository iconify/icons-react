import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wjuoup6qs.css';
import '../../css/t/tazr0wunn.css';
import '../../css/j/j16pcib4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wjuoup6qs"/><path class="tazr0wunn"/><path class="j16pcib4s"/></g>`,
		"fallback": "reicon:convert-three-d-cube",
	});
}

export default Component;
