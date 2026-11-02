import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plx5kkbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plx5kkbxi"/>`,
		"fallback": "mingcute:diamond-line",
	});
}

export default Component;
