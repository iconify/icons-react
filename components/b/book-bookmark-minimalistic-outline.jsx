import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yheqtv8bv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yheqtv8bv"/>`,
		"fallback": "solar:book-bookmark-minimalistic-outline",
	});
}

export default Component;
