import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz3u-o5ji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz3u-o5ji"/>`,
		"fallback": "ri:brush-4-line",
	});
}

export default Component;
