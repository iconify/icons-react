import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mzsw-jb7t.css';
import '../../css/n/nlfb8obhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mzsw-jb7t"/><path class="nlfb8obhi wm-a"/></g>`,
		"fallback": "withicons:clipboard-plus",
	});
}

export default Component;
