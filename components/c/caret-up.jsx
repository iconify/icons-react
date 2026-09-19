import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab5cd6g8u.css';

const viewBox = {"width":1024,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab5cd6g8u"/>`,
		"fallback": "fa:caret-up",
	});
}

export default Component;
