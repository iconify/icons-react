import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb2jjab7z.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb2jjab7z"/>`,
		"fallback": "picon:celcius",
	});
}

export default Component;
