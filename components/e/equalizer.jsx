import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/one0pebsa.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="one0pebsa"/>`,
		"fallback": "simple-line-icons:equalizer",
	});
}

export default Component;
