import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/apwpyxbph.css';
import '../../css/b/by47lokjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="apwpyxbph"/><path class="by47lokjy"/></g>`,
		"fallback": "iconaut:cloud-moon",
	});
}

export default Component;
