import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vajrj7gzi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vajrj7gzi"/>`,
		"fallback": "pinhead:book-with-square-academic-cap",
	});
}

export default Component;
