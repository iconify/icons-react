import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tysxy4bbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tysxy4bbi"/>`,
		"fallback": "hugeicons:chart-no-axes-column-increasing",
	});
}

export default Component;
