import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4v7wtbcu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4v7wtbcu"/>`,
		"fallback": "pinhead:coffin-with-quaker-star",
	});
}

export default Component;
