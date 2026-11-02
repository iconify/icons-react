import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxr70ab7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxr70ab7t"/>`,
		"fallback": "mingcute:chart-horizontal-fill",
	});
}

export default Component;
