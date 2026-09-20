import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5ln4bbge.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5ln4bbge"/>`,
		"fallback": "osmic:biergarten-14",
	});
}

export default Component;
