import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lhyb3bbbn.css';
import '../../css/x/x2f5ebbeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lhyb3bbbn"/><path class="wm-a x2f5ebbeb"/></g>`,
		"fallback": "withicons:grape",
	});
}

export default Component;
