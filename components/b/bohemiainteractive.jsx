import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sicp8y6ma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sicp8y6ma"/>`,
		"fallback": "simple-icons:bohemiainteractive",
	});
}

export default Component;
