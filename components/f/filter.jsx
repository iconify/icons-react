import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1rfcp77z.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1rfcp77z"/>`,
		"fallback": "ep:filter",
	});
}

export default Component;
