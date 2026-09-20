import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucv0ic1km.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucv0ic1km"/>`,
		"fallback": "token:algorand",
	});
}

export default Component;
