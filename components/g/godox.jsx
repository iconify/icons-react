import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_0xdacoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_0xdacoh"/>`,
		"fallback": "simple-icons:godox",
	});
}

export default Component;
