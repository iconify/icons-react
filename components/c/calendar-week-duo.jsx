import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk0nhwb5n.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w5j7cdbmb.css';
import '../../css/r/r4pn0xbvk.css';
import '../../css/a/am1vutbfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk0nhwb5n secondary"/><g class="dt0cm9dhy primary"><path class="w5j7cdbmb"/><path class="r4pn0xbvk"/><path class="am1vutbfv"/></g>`,
		"fallback": "iconaut:calendar-week-duo",
	});
}

export default Component;
