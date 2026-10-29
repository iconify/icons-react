import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ac1m7ezbo.css';
import '../../css/h/h4vcpvbdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ac1m7ezbo"/><path class="h4vcpvbdh wm-a"/></g>`,
		"fallback": "withicons:cat",
	});
}

export default Component;
