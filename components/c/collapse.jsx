import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc275r_wj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc275r_wj"/>`,
		"fallback": "ooui:collapse",
	});
}

export default Component;
