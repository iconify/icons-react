import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/up3rqob9n.css';
import '../../css/u/uhxoacb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="up3rqob9n"/><path class="uhxoacb3s wm-a"/></g>`,
		"fallback": "withicons:chevrons-down-duo",
	});
}

export default Component;
