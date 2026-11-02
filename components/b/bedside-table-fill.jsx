import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suzek1byy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suzek1byy"/>`,
		"fallback": "mingcute:bedside-table-fill",
	});
}

export default Component;
