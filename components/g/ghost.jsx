import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0vvpr7by.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0vvpr7by"/>`,
		"fallback": "simple-line-icons:ghost",
	});
}

export default Component;
