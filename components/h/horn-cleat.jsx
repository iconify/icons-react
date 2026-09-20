import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8yw98b3z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8yw98b3z"/>`,
		"fallback": "temaki:horn-cleat",
	});
}

export default Component;
