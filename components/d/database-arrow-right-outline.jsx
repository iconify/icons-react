import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-fpd76-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-fpd76-w"/>`,
		"fallback": "mdi:database-arrow-right-outline",
	});
}

export default Component;
