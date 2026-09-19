import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4yh9sqql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4yh9sqql"/>`,
		"fallback": "boxicons:hexagon",
	});
}

export default Component;
