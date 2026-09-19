import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4ceoj48v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4ceoj48v"/>`,
		"fallback": "cryptocurrency:gzr",
	});
}

export default Component;
