import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6n8tjbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6n8tjbud"/>`,
		"fallback": "mingcute:dashboard-2-line",
	});
}

export default Component;
