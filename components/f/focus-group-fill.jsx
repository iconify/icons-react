import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbyxike5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbyxike5o"/>`,
		"fallback": "mingcute:focus-group-fill",
	});
}

export default Component;
