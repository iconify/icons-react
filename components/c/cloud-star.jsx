import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z8df8vb7j.css';
import '../../css/y/yidzp7bkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z8df8vb7j"/><path class="yidzp7bkz"/></g>`,
		"fallback": "iconaut:cloud-star",
	});
}

export default Component;
