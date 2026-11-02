import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajg6vl71m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajg6vl71m"/>`,
		"fallback": "mingcute:align-vertical-distribute-center-line",
	});
}

export default Component;
