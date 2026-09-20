import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo4h86buk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo4h86buk"/>`,
		"fallback": "mdi:flag-variant-remove-outline",
	});
}

export default Component;
