import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx3slkn2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx3slkn2r"/>`,
		"fallback": "mdi:format-heading-2",
	});
}

export default Component;
