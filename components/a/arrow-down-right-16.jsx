import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf5jombhy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf5jombhy"/>`,
		"fallback": "qlementine-icons:arrow-down-right-16",
	});
}

export default Component;
