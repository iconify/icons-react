import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iguu3q8az.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iguu3q8az"/>`,
		"fallback": "mingcute:color-filter-line",
	});
}

export default Component;
