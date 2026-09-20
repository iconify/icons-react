import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2a3fl7wn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p2a3fl7wn"/>`,
		"fallback": "streamline-color:button-rewind-2-flat",
	});
}

export default Component;
