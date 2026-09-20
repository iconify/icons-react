import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyng10oup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyng10oup"/>`,
		"fallback": "mdi:file-swap-outline",
	});
}

export default Component;
