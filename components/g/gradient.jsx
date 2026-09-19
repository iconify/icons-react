import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4dmstg7e.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4dmstg7e"/>`,
		"fallback": "whh:gradient",
	});
}

export default Component;
