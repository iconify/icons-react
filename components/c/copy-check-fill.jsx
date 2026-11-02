import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcvp2ac6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcvp2ac6m"/>`,
		"fallback": "mingcute:copy-check-fill",
	});
}

export default Component;
