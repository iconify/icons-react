import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3qtmlbir.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dvazkxb4v.css';
import '../../css/v/vowmmibye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary t3qtmlbir"/><g class="dt0cm9dhy primary"><path class="dvazkxb4v"/><path class="vowmmibye"/></g>`,
		"fallback": "iconaut:bomb-duo",
	});
}

export default Component;
