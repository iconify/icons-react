import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an969ebdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an969ebdu"/>`,
		"fallback": "simple-icons:binance",
	});
}

export default Component;
