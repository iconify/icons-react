import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omusb-bxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omusb-bxl"/>`,
		"fallback": "mingcute:database-search-fill",
	});
}

export default Component;
