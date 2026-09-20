import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8-to4bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8-to4bqi"/>`,
		"fallback": "mdi:cards-playing-diamond-outline",
	});
}

export default Component;
