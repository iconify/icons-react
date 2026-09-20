import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu9d84atf.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu9d84atf"/>`,
		"fallback": "system-uicons:card-timeline",
	});
}

export default Component;
