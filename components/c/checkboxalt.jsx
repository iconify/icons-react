import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k49s1-b9b.css';

const viewBox = {"width":1025,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k49s1-b9b"/>`,
		"fallback": "whh:checkboxalt",
	});
}

export default Component;
