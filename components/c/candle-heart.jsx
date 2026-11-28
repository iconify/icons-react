import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joue-ubee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="joue-ubee"/>`,
		"fallback": "noviair-light:candle-heart",
	});
}

export default Component;
