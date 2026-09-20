import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i29sy8rki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i29sy8rki"/>`,
		"fallback": "mingcute:arrow-up-line",
	});
}

export default Component;
