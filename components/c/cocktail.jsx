import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9ra0p2rk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9ra0p2rk"/>`,
		"fallback": "mynaui:cocktail",
	});
}

export default Component;
