import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-u4b9bua.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h-u4b9bua"/>`,
		"fallback": "streamline-color:hinduism-flat",
	});
}

export default Component;
