import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry1vzxbgx.css';
import '../../css/h/hllb8zubv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry1vzxbgx"/><path class="hllb8zubv"/>`,
		"fallback": "solar:filter-close-bold",
	});
}

export default Component;
