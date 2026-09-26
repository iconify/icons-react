import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emm7uglhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="emm7uglhe"/>`,
		"fallback": "solar:bookmark-x-bold",
	});
}

export default Component;
