import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwm-1ccgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwm-1ccgx"/>`,
		"fallback": "boxicons:heart",
	});
}

export default Component;
