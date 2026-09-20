import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3u-ax48z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3u-ax48z"/>`,
		"fallback": "ix:connected-circle-filled",
	});
}

export default Component;
