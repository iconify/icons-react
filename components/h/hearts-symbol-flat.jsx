import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbc36ab8i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wbc36ab8i"/>`,
		"fallback": "streamline-color:hearts-symbol-flat",
	});
}

export default Component;
