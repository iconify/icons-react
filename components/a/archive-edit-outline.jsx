import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b90y7byle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b90y7byle"/>`,
		"fallback": "mdi:archive-edit-outline",
	});
}

export default Component;
