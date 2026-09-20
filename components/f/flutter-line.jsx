import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kta6hubpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kta6hubpq"/>`,
		"fallback": "ri:flutter-line",
	});
}

export default Component;
