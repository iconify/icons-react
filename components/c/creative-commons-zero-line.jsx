import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6sxwjt4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6sxwjt4z"/>`,
		"fallback": "ri:creative-commons-zero-line",
	});
}

export default Component;
