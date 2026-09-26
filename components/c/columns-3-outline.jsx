import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng4igtd1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ng4igtd1k"/>`,
		"fallback": "solar:columns-3-outline",
	});
}

export default Component;
