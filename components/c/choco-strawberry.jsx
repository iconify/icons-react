import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x0yp8_l9a.css';
import '../../css/z/zbbszfbkd.css';
import '../../css/v/vjvpaaccg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="x0yp8_l9a"/><path class="wm-a zbbszfbkd"/><path class="vjvpaaccg wm-a"/></g>`,
		"fallback": "withicons:choco-strawberry",
	});
}

export default Component;
