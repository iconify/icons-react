import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okxd8xsdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okxd8xsdk"/>`,
		"fallback": "mingcute:book-alert-fill",
	});
}

export default Component;
