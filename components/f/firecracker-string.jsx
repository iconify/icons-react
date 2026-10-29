import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zy9xw0nee.css';
import '../../css/g/g2ivodb2f.css';
import '../../css/v/vt-2nu9uw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wm-a zy9xw0nee"/><path class="g2ivodb2f"/><path class="vt-2nu9uw wm-s"/></g>`,
		"fallback": "withicons:firecracker-string",
	});
}

export default Component;
