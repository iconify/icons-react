import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en32lmbpb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en32lmbpb"/>`,
		"fallback": "fa7-solid:at",
	});
}

export default Component;
