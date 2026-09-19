import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e17yj__7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e17yj__7l"/>`,
		"fallback": "boxicons:info-circle-filled",
	});
}

export default Component;
