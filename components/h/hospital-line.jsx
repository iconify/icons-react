import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grg9tgctz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grg9tgctz"/>`,
		"fallback": "mingcute:hospital-line",
	});
}

export default Component;
