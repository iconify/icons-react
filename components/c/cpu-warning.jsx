import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a12819bpr.css';
import '../../css/l/l-3t-xbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a12819bpr"/><path class="l-3t-xbgl"/></g>`,
		"fallback": "iconoir:cpu-warning",
	});
}

export default Component;
