import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi-ioabzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi-ioabzf"/>`,
		"fallback": "ri:arrow-left-line",
	});
}

export default Component;
