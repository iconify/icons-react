import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rql910rds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rql910rds"/>`,
		"fallback": "mingcute:command-line",
	});
}

export default Component;
