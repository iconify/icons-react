import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfy514bwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfy514bwz"/>`,
		"fallback": "mdi:arrow-down-right-bold",
	});
}

export default Component;
