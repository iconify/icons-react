import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoop8ibeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoop8ibeo"/>`,
		"fallback": "boxicons:cube",
	});
}

export default Component;
