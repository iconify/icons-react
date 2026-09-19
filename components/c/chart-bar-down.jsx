import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm0ys2uoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm0ys2uoz"/>`,
		"fallback": "griddy-icons:chart-bar-down",
	});
}

export default Component;
