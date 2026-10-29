import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r0v6itbzy.css';
import '../../css/l/ltpyfabni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="r0v6itbzy wm-a"/><path class="ltpyfabni"/></g>`,
		"fallback": "withicons:headphones",
	});
}

export default Component;
