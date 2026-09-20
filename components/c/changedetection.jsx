import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5su30b5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5su30b5v"/>`,
		"fallback": "simple-icons:changedetection",
	});
}

export default Component;
