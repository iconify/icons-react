import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0lsn2zoo.css';

const viewBox = {"width":1024,"height":1026};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0lsn2zoo"/>`,
		"fallback": "whh:arrowleft",
	});
}

export default Component;
