import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9p47ybkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9p47ybkf"/>`,
		"fallback": "mdi:cube",
	});
}

export default Component;
