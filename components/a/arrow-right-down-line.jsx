import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvsh8gd7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvsh8gd7g"/>`,
		"fallback": "mingcute:arrow-right-down-line",
	});
}

export default Component;
