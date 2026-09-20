import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmm3h1b-l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmm3h1b-l"/>`,
		"fallback": "la:hand-rock",
	});
}

export default Component;
