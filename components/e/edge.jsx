import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0tqwu5bu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0tqwu5bu"/>`,
		"fallback": "file-icons:edge",
	});
}

export default Component;
