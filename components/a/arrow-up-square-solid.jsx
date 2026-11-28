import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg0h9qbfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg0h9qbfj"/>`,
		"fallback": "iconaut:arrow-up-square-solid",
	});
}

export default Component;
