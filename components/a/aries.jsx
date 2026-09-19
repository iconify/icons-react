import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnbhzrbmh.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnbhzrbmh"/>`,
		"fallback": "fa7-solid:aries",
	});
}

export default Component;
