import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/ybmhqv0gc.css';
import '../../css/c/cgd0m5bmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ybmhqv0gc"/><path class="cgd0m5bmk"/></g>`,
		"fallback": "matita:chi",
	});
}

export default Component;
