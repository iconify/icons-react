import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3us1om-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l3us1om-z"/>`,
		"fallback": "solar:cat-bold",
	});
}

export default Component;
