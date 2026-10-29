import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/soujtab5z.css';
import '../../css/x/xs03ubb6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="soujtab5z"/><path class="wm-a xs03ubb6l"/></g>`,
		"fallback": "withicons:inbox",
	});
}

export default Component;
