import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-3zwldxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-3zwldxa"/>`,
		"fallback": "ri:customer-service-line",
	});
}

export default Component;
