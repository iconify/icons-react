import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e152ozbdb.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e152ozbdb"/>`,
		"fallback": "ep:arrow-right-bold",
	});
}

export default Component;
