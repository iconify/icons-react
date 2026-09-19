import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfximt3op.css';

const viewBox = {"width":1024,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfximt3op"/>`,
		"fallback": "fa:caret-down",
	});
}

export default Component;
