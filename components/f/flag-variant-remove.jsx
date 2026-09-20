import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpoc7h0yx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpoc7h0yx"/>`,
		"fallback": "mdi:flag-variant-remove",
	});
}

export default Component;
