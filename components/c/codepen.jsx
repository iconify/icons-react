import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz941qnwj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz941qnwj"/>`,
		"fallback": "thesvg-color:codepen",
	});
}

export default Component;
