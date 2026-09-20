import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma2jnib0w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma2jnib0w"/>`,
		"fallback": "ooui:function",
	});
}

export default Component;
