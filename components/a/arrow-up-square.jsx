import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmqgre6gp.css';
import '../../css/j/jor-usn7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmqgre6gp"/><path class="jor-usn7v"/>`,
		"fallback": "boxicons:arrow-up-square",
	});
}

export default Component;
