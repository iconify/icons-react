import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6ud6qgab.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6ud6qgab"/>`,
		"fallback": "pinhead:coffin-with-nine-point-star-outline",
	});
}

export default Component;
