import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz0sc603w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz0sc603w"/>`,
		"fallback": "mingcute:horn-2-line",
	});
}

export default Component;
