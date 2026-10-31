import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxf3dbcsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxf3dbcsa"/>`,
		"fallback": "coolicons:face-wink-fill-round",
	});
}

export default Component;
