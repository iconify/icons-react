import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk91wbtcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk91wbtcn"/>`,
		"fallback": "mingcute:grid-2-line",
	});
}

export default Component;
