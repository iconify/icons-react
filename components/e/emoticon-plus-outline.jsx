import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5xkr-ypa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5xkr-ypa"/>`,
		"fallback": "mdi:emoticon-plus-outline",
	});
}

export default Component;
