import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5-o9ybxo.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5-o9ybxo"/>`,
		"fallback": "system-uicons:forward",
	});
}

export default Component;
