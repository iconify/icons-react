import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxusby2tu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxusby2tu"/>`,
		"fallback": "mingcute:arrow-up-from-dot-fill",
	});
}

export default Component;
