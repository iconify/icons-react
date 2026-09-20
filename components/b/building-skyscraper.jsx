import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl5644buh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl5644buh"/>`,
		"fallback": "pixelarticons:building-skyscraper",
	});
}

export default Component;
