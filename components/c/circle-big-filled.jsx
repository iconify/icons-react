import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctuz6eght.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctuz6eght"/>`,
		"fallback": "pepicons-pencil:circle-big-filled",
	});
}

export default Component;
