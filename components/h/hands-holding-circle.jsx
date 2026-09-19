import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g90kx7ply.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g90kx7ply"/>`,
		"fallback": "fa7-solid:hands-holding-circle",
	});
}

export default Component;
