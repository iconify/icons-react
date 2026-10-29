import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q65jjqyob.css';
import '../../css/y/ykqnlnbbe.css';
import '../../css/j/jmvv3kbnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q65jjqyob"/><path class="wm-a ykqnlnbbe"/><path class="jmvv3kbnk"/></g>`,
		"fallback": "withicons:calendar-duo",
	});
}

export default Component;
