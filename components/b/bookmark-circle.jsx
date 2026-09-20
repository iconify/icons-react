import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/couyrwl6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="couyrwl6j"/>`,
		"fallback": "reicon:bookmark-circle",
	});
}

export default Component;
