import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua_ilqy1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua_ilqy1i"/>`,
		"fallback": "bx:bxs-location-plus",
	});
}

export default Component;
