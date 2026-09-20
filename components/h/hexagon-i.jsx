import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3s-c3bee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3s-c3bee"/>`,
		"fallback": "tabler:hexagon-i",
	});
}

export default Component;
