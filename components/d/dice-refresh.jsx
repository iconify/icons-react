import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4n29ob_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4n29ob_e"/>`,
		"fallback": "noviair-light:dice-refresh",
	});
}

export default Component;
