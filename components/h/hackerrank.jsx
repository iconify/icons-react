import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0arro94y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0arro94y"/>`,
		"fallback": "cib:hackerrank",
	});
}

export default Component;
