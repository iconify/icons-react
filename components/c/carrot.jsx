import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m98lz0v9y.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m98lz0v9y"/>`,
		"fallback": "picon:carrot",
	});
}

export default Component;
