import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfd52pbot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfd52pbot"/>`,
		"fallback": "coolicons:hourglass-fill-round",
	});
}

export default Component;
