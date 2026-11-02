import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-2grmbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-2grmbbr"/>`,
		"fallback": "mingcute:four-wheel-drive-fill",
	});
}

export default Component;
