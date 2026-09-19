import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhai6mw-v.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhai6mw-v"/>`,
		"fallback": "fa-solid:graduation-cap",
	});
}

export default Component;
