import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9ox9hben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9ox9hben"/>`,
		"fallback": "humbleicons:bulb-off",
	});
}

export default Component;
