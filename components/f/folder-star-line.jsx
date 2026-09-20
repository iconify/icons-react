import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q31pl2bmr.css';
import '../../css/y/y0lh2dbky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q31pl2bmr"/><path class="y0lh2dbky"/>`,
		"fallback": "mingcute:folder-star-line",
	});
}

export default Component;
