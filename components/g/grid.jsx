import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg7ftebsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg7ftebsj"/>`,
		"fallback": "boxicons:grid",
	});
}

export default Component;
