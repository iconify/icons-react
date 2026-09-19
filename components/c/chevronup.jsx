import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n01ij7bfy.css';

const viewBox = {"width":1024,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n01ij7bfy"/>`,
		"fallback": "whh:chevronup",
	});
}

export default Component;
