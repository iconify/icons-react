import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iut4a4byw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iut4a4byw"/>`,
		"fallback": "noviair-light:bell-x",
	});
}

export default Component;
