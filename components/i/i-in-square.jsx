import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3jhhxjvj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3jhhxjvj"/>`,
		"fallback": "roentgen:i-in-square",
	});
}

export default Component;
