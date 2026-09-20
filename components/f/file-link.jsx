import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmqxcw9ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmqxcw9ot"/>`,
		"fallback": "mdi:file-link",
	});
}

export default Component;
