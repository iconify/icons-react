import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkpz82hxh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkpz82hxh"/>`,
		"fallback": "qlementine-icons:align-center-vertical-2-16",
	});
}

export default Component;
