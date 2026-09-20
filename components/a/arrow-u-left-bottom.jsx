import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtsxs0oef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtsxs0oef"/>`,
		"fallback": "mdi:arrow-u-left-bottom",
	});
}

export default Component;
