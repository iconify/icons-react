import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vaczqdbrk.css';
import '../../css/j/jor-usn7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vaczqdbrk"/><path class="jor-usn7v"/>`,
		"fallback": "boxicons:chevron-left-square",
	});
}

export default Component;
