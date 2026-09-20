import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e48hl62yw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e48hl62yw"/>`,
		"fallback": "mingcute:fingerprint-2-line",
	});
}

export default Component;
