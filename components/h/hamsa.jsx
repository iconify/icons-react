import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayh6ug0lh.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayh6ug0lh"/>`,
		"fallback": "fa7-solid:hamsa",
	});
}

export default Component;
