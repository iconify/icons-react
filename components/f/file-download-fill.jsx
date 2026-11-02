import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1xvcg9sw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1xvcg9sw"/>`,
		"fallback": "mingcute:file-download-fill",
	});
}

export default Component;
