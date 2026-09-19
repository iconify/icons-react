import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c02b__imu.css';
import '../../css/p/p9-zrkb4g.css';
import '../../css/f/fdpjff5dn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c02b__imu"/><path class="p9-zrkb4g"/><path class="fdpjff5dn"/></g>`,
		"fallback": "iconoir:emoji-sad",
	});
}

export default Component;
