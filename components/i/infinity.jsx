import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9an_9pbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9an_9pbc"/>`,
		"fallback": "iconaut:infinity",
	});
}

export default Component;
