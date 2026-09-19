import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1rjs4b0l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1rjs4b0l"/>`,
		"fallback": "fa7-solid:expand",
	});
}

export default Component;
