import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn9fr8b3o.css';
import '../../css/i/i8m7q71ql.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn9fr8b3o"/><path class="i8m7q71ql"/>`,
		"fallback": "iwwa:consumption-o",
	});
}

export default Component;
