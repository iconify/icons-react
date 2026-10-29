import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jmvv3kbnk.css';
import '../../css/i/i2a-c6bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jmvv3kbnk"/><path class="i2a-c6bbv wm-a"/></g>`,
		"fallback": "withicons:calendar-heart",
	});
}

export default Component;
