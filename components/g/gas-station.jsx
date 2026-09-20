import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmh9cs9my.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dmh9cs9my"/>`,
		"fallback": "reicon:gas-station",
	});
}

export default Component;
