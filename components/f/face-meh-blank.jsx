import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjfdvobdl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjfdvobdl"/>`,
		"fallback": "fa7-solid:face-meh-blank",
	});
}

export default Component;
