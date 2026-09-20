import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le_804bxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le_804bxj"/>`,
		"fallback": "mingcute:briefcase-2-line",
	});
}

export default Component;
