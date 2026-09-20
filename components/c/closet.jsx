import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l64_-xbml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l64_-xbml"/>`,
		"fallback": "mdi:closet",
	});
}

export default Component;
