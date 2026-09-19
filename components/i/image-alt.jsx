import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu56ptb4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu56ptb4o"/>`,
		"fallback": "bxs:image-alt",
	});
}

export default Component;
