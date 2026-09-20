import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u08vxnw-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u08vxnw-m"/>`,
		"fallback": "thesvg:bilibili-index-index-team",
	});
}

export default Component;
