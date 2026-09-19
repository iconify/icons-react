import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0zxtbwab.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0zxtbwab"/>`,
		"fallback": "fa7-solid:bowl-food",
	});
}

export default Component;
