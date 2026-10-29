import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/euj49csjz.css';
import '../../css/m/my7poevrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="euj49csjz"/><path class="my7poevrw wm-a"/></g>`,
		"fallback": "withicons:film",
	});
}

export default Component;
