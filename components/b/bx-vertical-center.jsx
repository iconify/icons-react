import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-e5l_3bn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-e5l_3bn"/>`,
		"fallback": "bx:bx-vertical-center",
	});
}

export default Component;
