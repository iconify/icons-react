import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mi-am0x6o.css';
import '../../css/o/oy8cx5bvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mi-am0x6o"/><path class="oy8cx5bvy"/></g>`,
		"fallback": "iconaut:folder-open",
	});
}

export default Component;
