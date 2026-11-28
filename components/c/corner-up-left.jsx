import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s40o7qy1q.css';
import '../../css/g/gb9knvbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="s40o7qy1q"/><path class="gb9knvbdi"/></g>`,
		"fallback": "iconaut:corner-up-left",
	});
}

export default Component;
