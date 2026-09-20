import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3108qmqy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3108qmqy"/>`,
		"fallback": "simple-line-icons:arrow-left-circle",
	});
}

export default Component;
