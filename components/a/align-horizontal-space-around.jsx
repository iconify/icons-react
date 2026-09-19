import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n53m4vbyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n53m4vbyw"/>`,
		"fallback": "hugeicons:align-horizontal-space-around",
	});
}

export default Component;
