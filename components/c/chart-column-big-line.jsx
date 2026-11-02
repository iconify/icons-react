import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzbz7fr0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzbz7fr0g"/>`,
		"fallback": "mingcute:chart-column-big-line",
	});
}

export default Component;
