import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiesivb1o.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiesivb1o"/>`,
		"fallback": "fa7-regular:face-rolling-eyes",
	});
}

export default Component;
