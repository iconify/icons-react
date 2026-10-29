import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t80203ihy.css';
import '../../css/n/nadg1jsjo.css';
import '../../css/g/gt59o1gky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="t80203ihy"/><path class="nadg1jsjo"/><path class="gt59o1gky"/></g>`,
		"fallback": "withicons-bauhaus:corner-up-right",
	});
}

export default Component;
