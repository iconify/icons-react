import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clczj4b0b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clczj4b0b"/>`,
		"fallback": "garden:grid-3x3-stroke-20",
	});
}

export default Component;
