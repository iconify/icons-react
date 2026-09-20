import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e61cy3bkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e61cy3bkq"/>`,
		"fallback": "mdi:electricity-to-grid",
	});
}

export default Component;
