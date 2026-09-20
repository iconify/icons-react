import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8n0i6b7k.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8n0i6b7k"/>`,
		"fallback": "oi:delete",
	});
}

export default Component;
