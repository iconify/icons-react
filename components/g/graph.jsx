import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbch5l7zf.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbch5l7zf"/>`,
		"fallback": "simple-line-icons:graph",
	});
}

export default Component;
