import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/go4z5ccdt.css';
import '../../css/d/dx9i-tzjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="go4z5ccdt"/><path class="dx9i-tzjz wm-a"/></g>`,
		"fallback": "withicons:chevrons-left-duo",
	});
}

export default Component;
