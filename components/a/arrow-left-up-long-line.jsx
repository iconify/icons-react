import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyflgxb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyflgxb0c"/>`,
		"fallback": "ri:arrow-left-up-long-line",
	});
}

export default Component;
