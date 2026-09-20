import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yugx7jbzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yugx7jbzw"/>`,
		"fallback": "mdi:advertisements",
	});
}

export default Component;
