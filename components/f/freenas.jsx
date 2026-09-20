import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqgg7pbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqgg7pbkg"/>`,
		"fallback": "thesvg-color:freenas",
	});
}

export default Component;
