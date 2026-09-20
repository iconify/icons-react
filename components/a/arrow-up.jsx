import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrqn5eb9m.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrqn5eb9m"/>`,
		"fallback": "simple-line-icons:arrow-up",
	});
}

export default Component;
