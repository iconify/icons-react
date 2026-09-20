import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac9x35hjm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ac9x35hjm"/>`,
		"fallback": "ix:axis-rotation",
	});
}

export default Component;
