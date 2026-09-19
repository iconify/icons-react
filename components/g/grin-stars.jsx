import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae8u1iful.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae8u1iful"/>`,
		"fallback": "fa7-regular:grin-stars",
	});
}

export default Component;
