import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbsk9kbsr.css';
import '../../css/i/ionjprbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lbsk9kbsr"/><path class="ionjprbwc"/>`,
		"fallback": "solar:bookmark-off-outline",
	});
}

export default Component;
