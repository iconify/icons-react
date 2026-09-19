import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc75gkbej.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc75gkbej"/>`,
		"fallback": "fa7-solid:code-compare",
	});
}

export default Component;
