import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afzffgg-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afzffgg-r"/>`,
		"fallback": "heroicons:bars-3-bottom-right",
	});
}

export default Component;
