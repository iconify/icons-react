import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b4d1e6bie.css';
import '../../css/w/wcpe8eb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="b4d1e6bie"/><path class="wcpe8eb7b wm-a"/></g>`,
		"fallback": "withicons:car-front",
	});
}

export default Component;
