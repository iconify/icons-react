import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty-ubbn8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty-ubbn8u"/>`,
		"fallback": "doodle-icons:chat",
	});
}

export default Component;
