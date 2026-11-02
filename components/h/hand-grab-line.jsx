import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkq_hibld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkq_hibld"/>`,
		"fallback": "mingcute:hand-grab-line",
	});
}

export default Component;
