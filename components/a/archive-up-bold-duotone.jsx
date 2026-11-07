import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6p8skb6u.css';
import '../../css/i/i3l80h-5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6p8skb6u"/><path class="i3l80h-5o"/>`,
		"fallback": "solar:archive-up-bold-duotone",
	});
}

export default Component;
