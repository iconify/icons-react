import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7ls11b1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7ls11b1m"/>`,
		"fallback": "mdi:emoticon-remove",
	});
}

export default Component;
