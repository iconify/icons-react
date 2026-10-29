import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l89yb9bbr.css';
import '../../css/x/xs03ubb6l.css';
import '../../css/s/soujtab5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l89yb9bbr"/><path class="wm-a xs03ubb6l"/><path class="soujtab5z"/></g>`,
		"fallback": "withicons:inbox-duo",
	});
}

export default Component;
