import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbc_w3bzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbc_w3bzm"/>`,
		"fallback": "ri:drag-move-line",
	});
}

export default Component;
