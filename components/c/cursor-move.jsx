import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tahznkn8j.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tahznkn8j"/>`,
		"fallback": "simple-line-icons:cursor-move",
	});
}

export default Component;
