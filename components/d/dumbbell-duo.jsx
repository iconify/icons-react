import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qnn8q_69m.css';
import '../../css/g/gndq0ebyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qnn8q_69m"/><path class="gndq0ebyi"/></g>`,
		"fallback": "withicons:dumbbell-duo",
	});
}

export default Component;
