import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-maijksi.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-maijksi"/>`,
		"fallback": "fa7-solid:arrow-down-1-9",
	});
}

export default Component;
