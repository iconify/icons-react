import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrl4igb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrl4igb7t"/>`,
		"fallback": "mdi:hashtag-box-outline",
	});
}

export default Component;
