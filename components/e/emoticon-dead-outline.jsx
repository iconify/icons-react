import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3va3abzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3va3abzk"/>`,
		"fallback": "mdi:emoticon-dead-outline",
	});
}

export default Component;
