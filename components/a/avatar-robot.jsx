import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/umz1zqvzv.css';
import '../../css/g/gyq63ic-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="umz1zqvzv"/><path class="gyq63ic-u wm-a"/></g>`,
		"fallback": "withicons:avatar-robot",
	});
}

export default Component;
