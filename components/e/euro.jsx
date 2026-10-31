import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qngp211ig.css';
import '../../css/v/vf1_1-vzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qngp211ig"/><path class="vf1_1-vzn"/></g>`,
		"fallback": "withicons-retro:euro",
	});
}

export default Component;
