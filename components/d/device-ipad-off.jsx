import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hra2rzbdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hra2rzbdx"/>`,
		"fallback": "tabler:device-ipad-off",
	});
}

export default Component;
