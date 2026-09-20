import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldiaiqbkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldiaiqbkq"/>`,
		"fallback": "mdi:dice-d20-outline",
	});
}

export default Component;
