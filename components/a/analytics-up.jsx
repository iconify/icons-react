import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g9wzzxzrj.css';
import '../../css/x/x44491btz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g9wzzxzrj"/><path class="x44491btz"/></g>`,
		"fallback": "hugeicons:analytics-up",
	});
}

export default Component;
