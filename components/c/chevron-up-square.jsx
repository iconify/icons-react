import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9z1q4djr.css';
import '../../css/j/jor-usn7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9z1q4djr"/><path class="jor-usn7v"/>`,
		"fallback": "boxicons:chevron-up-square",
	});
}

export default Component;
