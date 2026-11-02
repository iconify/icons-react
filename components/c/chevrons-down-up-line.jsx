import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-d8ncw7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-d8ncw7d"/>`,
		"fallback": "mingcute:chevrons-down-up-line",
	});
}

export default Component;
