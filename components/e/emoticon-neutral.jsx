import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyooy8g6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyooy8g6e"/>`,
		"fallback": "mdi:emoticon-neutral",
	});
}

export default Component;
