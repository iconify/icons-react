import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dogqpyixk.css';
import '../../css/v/vh4_9xtzu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="dogqpyixk"/><path class="vh4_9xtzu"/></g>`,
		"fallback": "cryptocurrency-color:gnt",
	});
}

export default Component;
