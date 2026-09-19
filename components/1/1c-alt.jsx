import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsak5lzio.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsak5lzio"/>`,
		"fallback": "file-icons:1c-alt",
	});
}

export default Component;
