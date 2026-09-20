import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei1baibta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei1baibta"/>`,
		"fallback": "tabler:device-watch-off",
	});
}

export default Component;
