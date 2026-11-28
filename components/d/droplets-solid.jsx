import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpn7nrbrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpn7nrbrd"/>`,
		"fallback": "iconaut:droplets-solid",
	});
}

export default Component;
