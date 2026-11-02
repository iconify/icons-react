import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh42j-28c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh42j-28c"/>`,
		"fallback": "sidekickicons:arrow-curve-down-right",
	});
}

export default Component;
