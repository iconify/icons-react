import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t540i99wb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t540i99wb"/>`,
		"fallback": "mingcute:home-3-fill",
	});
}

export default Component;
