import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vu3wudb-q.css';
import '../../css/c/c8ypqbc8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vu3wudb-q"/><path class="c8ypqbc8z"/></g>`,
		"fallback": "iconoir:home-alt",
	});
}

export default Component;
