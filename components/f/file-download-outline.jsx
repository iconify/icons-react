import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp8-r7b5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp8-r7b5c"/>`,
		"fallback": "mdi:file-download-outline",
	});
}

export default Component;
