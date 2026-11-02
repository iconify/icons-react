import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-pk5x7ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-pk5x7ot"/>`,
		"fallback": "mingcute:edit-3-line",
	});
}

export default Component;
