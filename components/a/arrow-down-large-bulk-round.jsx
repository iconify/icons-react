import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx-73pble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx-73pble"/>`,
		"fallback": "coolicons:arrow-down-large-bulk-round",
	});
}

export default Component;
