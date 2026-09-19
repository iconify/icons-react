import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw44cqses.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw44cqses"/>`,
		"fallback": "griddy-icons:halloween-candle-filled",
	});
}

export default Component;
