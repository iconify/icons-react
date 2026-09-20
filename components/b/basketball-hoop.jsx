import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktxdzgb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktxdzgb9z"/>`,
		"fallback": "mdi:basketball-hoop",
	});
}

export default Component;
