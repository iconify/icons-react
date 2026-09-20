import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yr4-wsx9s.css';
import '../../css/y/yxye4nkep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yr4-wsx9s"/><path class="yxye4nkep"/></g>`,
		"fallback": "reicon:battery-empty2",
	});
}

export default Component;
