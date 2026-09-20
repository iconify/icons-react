import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9dq64bjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9dq64bjf"/>`,
		"fallback": "mdi:file-warning-outline",
	});
}

export default Component;
