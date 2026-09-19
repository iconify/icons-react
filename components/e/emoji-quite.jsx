import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/ktpr7t_8m.css';
import '../../css/c/c02b__imu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ktpr7t_8m"/><path class="c02b__imu"/></g>`,
		"fallback": "iconoir:emoji-quite",
	});
}

export default Component;
