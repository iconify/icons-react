import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kei-b7but.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kei-b7but"/>`,
		"fallback": "bx:arrow-from-left",
	});
}

export default Component;
