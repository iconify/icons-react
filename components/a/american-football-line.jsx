import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiongsb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiongsb-t"/>`,
		"fallback": "mingcute:american-football-line",
	});
}

export default Component;
