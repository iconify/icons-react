import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-qv2fnuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-qv2fnuy"/>`,
		"fallback": "mingcute:butterfly-fill",
	});
}

export default Component;
