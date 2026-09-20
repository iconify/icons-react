import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvrua7b7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvrua7b7g"/>`,
		"fallback": "mdi:elevator-passenger-outline",
	});
}

export default Component;
