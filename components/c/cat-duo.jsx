import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ltr9r3b-m.css';
import '../../css/h/h4vcpvbdh.css';
import '../../css/a/ac1m7ezbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ltr9r3b-m"/><path class="h4vcpvbdh wm-a"/><path class="ac1m7ezbo"/></g>`,
		"fallback": "withicons:cat-duo",
	});
}

export default Component;
