import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezg5edd7l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezg5edd7l"/>`,
		"fallback": "fa7-regular:flushed",
	});
}

export default Component;
