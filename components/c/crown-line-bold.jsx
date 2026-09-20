import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z95sz48rt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z95sz48rt"/>`,
		"fallback": "solar:crown-line-bold",
	});
}

export default Component;
