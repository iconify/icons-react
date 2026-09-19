import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jalbr5rjt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jalbr5rjt"/>`,
		"fallback": "fa7-solid:bolt",
	});
}

export default Component;
