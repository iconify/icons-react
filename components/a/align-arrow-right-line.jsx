import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8781o6pz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8781o6pz"/>`,
		"fallback": "mingcute:align-arrow-right-line",
	});
}

export default Component;
