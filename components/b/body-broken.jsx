import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el3w6m6et.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el3w6m6et"/>`,
		"fallback": "solar:body-broken",
	});
}

export default Component;
