import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnr7vfbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnr7vfbkl"/>`,
		"fallback": "mdi:drag-horizontal",
	});
}

export default Component;
