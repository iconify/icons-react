import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twgo94b6k.css';
import '../../css/b/bc0bc3bjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twgo94b6k"/><path class="bc0bc3bjm"/>`,
		"fallback": "bx:bx-up-arrow-circle",
	});
}

export default Component;
