import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u-315tb8l.css';
import '../../css/c/c02b__imu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u-315tb8l"/><path class="c02b__imu"/></g>`,
		"fallback": "iconoir:emoji-think-left",
	});
}

export default Component;
