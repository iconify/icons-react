import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u25n3tb8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u25n3tb8g"/>`,
		"fallback": "mingcute:align-horizontal-center-line",
	});
}

export default Component;
