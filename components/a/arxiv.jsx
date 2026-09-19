import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3__alb6k.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3__alb6k"/>`,
		"fallback": "academicons:arxiv",
	});
}

export default Component;
