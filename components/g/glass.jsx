import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucjk_d2la.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucjk_d2la"/>`,
		"fallback": "circum:glass",
	});
}

export default Component;
