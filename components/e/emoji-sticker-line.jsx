import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6ybxsbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6ybxsbrb"/>`,
		"fallback": "ri:emoji-sticker-line",
	});
}

export default Component;
