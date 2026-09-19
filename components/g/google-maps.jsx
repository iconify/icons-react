import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymc-z9bot.css';

const viewBox = {"width":448,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymc-z9bot"/>`,
		"fallback": "zmdi:google-maps",
	});
}

export default Component;
