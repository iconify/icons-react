import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqn5tq0nh.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqn5tq0nh"/>`,
		"fallback": "simple-line-icons:compass",
	});
}

export default Component;
