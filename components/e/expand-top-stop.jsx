import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsmvm8gve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsmvm8gve"/>`,
		"fallback": "lets-icons:expand-top-stop",
	});
}

export default Component;
