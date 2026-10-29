import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ow5u1cc8c.css';
import '../../css/v/vxyac5iur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ow5u1cc8c"/><path class="vxyac5iur wm-a"/></g>`,
		"fallback": "withicons:banana",
	});
}

export default Component;
