import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufuuu7b5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufuuu7b5r"/>`,
		"fallback": "mingcute:american-football-line",
	});
}

export default Component;
