import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mifmm9b9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mifmm9b9y"/>`,
		"fallback": "mingcute:counter-2-fill",
	});
}

export default Component;
