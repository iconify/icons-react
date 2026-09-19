import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5dtybw4z.css';

const viewBox = {"width":1024,"height":704};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5dtybw4z"/>`,
		"fallback": "whh:behance",
	});
}

export default Component;
