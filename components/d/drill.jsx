import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7sby1g1z.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7sby1g1z"/>`,
		"fallback": "whh:drill",
	});
}

export default Component;
