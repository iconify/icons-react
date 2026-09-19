import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll8z50eyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll8z50eyw"/>`,
		"fallback": "hugeicons:add-circle-half-dot",
	});
}

export default Component;
