import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xptx3t58d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xptx3t58d"/>`,
		"fallback": "mdi:border-vertical",
	});
}

export default Component;
