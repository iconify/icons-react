import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkx755b5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkx755b5z"/>`,
		"fallback": "ri:hearts-line",
	});
}

export default Component;
