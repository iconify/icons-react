import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lztux4j4y.css';
import '../../css/g/ghyktpbhu.css';
import '../../css/c/c91kb2byc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lztux4j4y"/><path class="ghyktpbhu wm-a"/><path class="c91kb2byc wm-s"/></g>`,
		"fallback": "withicons:alarm-clock-check",
	});
}

export default Component;
