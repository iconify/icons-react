import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5j4t1dbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5j4t1dbs"/>`,
		"fallback": "griddy-icons:fiverr",
	});
}

export default Component;
