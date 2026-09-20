import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlexgq-4o.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlexgq-4o"/>`,
		"fallback": "simple-line-icons:call-end",
	});
}

export default Component;
