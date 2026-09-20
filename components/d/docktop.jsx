import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpz8nccen.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpz8nccen"/>`,
		"fallback": "raphael:docktop",
	});
}

export default Component;
