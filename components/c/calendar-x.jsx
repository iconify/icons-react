import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jmvv3kbnk.css';
import '../../css/h/hp_yrebrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jmvv3kbnk"/><path class="hp_yrebrn wm-a"/></g>`,
		"fallback": "withicons:calendar-x",
	});
}

export default Component;
