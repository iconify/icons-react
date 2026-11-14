import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdg3wxbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdg3wxbvf"/>`,
		"fallback": "hugeicons:chart-column-dots",
	});
}

export default Component;
