import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ampnc_b6z.css';
import '../../css/c/c02b__imu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ampnc_b6z"/><path class="c02b__imu"/></g>`,
		"fallback": "iconoir:emoji-think-right",
	});
}

export default Component;
