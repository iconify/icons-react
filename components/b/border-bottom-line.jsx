import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfoza2ewb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfoza2ewb"/>`,
		"fallback": "mingcute:border-bottom-line",
	});
}

export default Component;
