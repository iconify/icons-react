import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8ky4lymv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8ky4lymv"/>`,
		"fallback": "mdi:basket-unfill",
	});
}

export default Component;
