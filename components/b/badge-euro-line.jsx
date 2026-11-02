import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjosz0b8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjosz0b8j"/>`,
		"fallback": "mingcute:badge-euro-line",
	});
}

export default Component;
