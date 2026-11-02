import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5i6fdbtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5i6fdbtx"/>`,
		"fallback": "mingcute:hand-two-fingers-fill",
	});
}

export default Component;
