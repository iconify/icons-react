import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1tr5shfu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1tr5shfu"/>`,
		"fallback": "at-icons:bot",
	});
}

export default Component;
