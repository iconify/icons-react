import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut4blebfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut4blebfs"/>`,
		"fallback": "reicon:home-trend-up-filled",
	});
}

export default Component;
