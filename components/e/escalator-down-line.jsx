import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juu2knbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juu2knbmb"/>`,
		"fallback": "mingcute:escalator-down-line",
	});
}

export default Component;
