import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7g2yjbil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7g2yjbil"/>`,
		"fallback": "griddy-icons:bluesky-filled",
	});
}

export default Component;
