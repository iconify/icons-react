import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je6qoibdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je6qoibdn"/>`,
		"fallback": "bx:bxs-building",
	});
}

export default Component;
