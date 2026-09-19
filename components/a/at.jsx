import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykf1wub3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykf1wub3u"/>`,
		"fallback": "bx:at",
	});
}

export default Component;
