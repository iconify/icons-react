import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5f070bwr.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5f070bwr"/>`,
		"fallback": "iwwa:circumflex",
	});
}

export default Component;
