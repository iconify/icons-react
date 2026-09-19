import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a92qnq0-x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a92qnq0-x"/>`,
		"fallback": "heroicons-solid:arrow-long-up",
	});
}

export default Component;
