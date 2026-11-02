import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r27q04b3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r27q04b3p"/>`,
		"fallback": "mingcute:filter-2-fill",
	});
}

export default Component;
