import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umd5l7blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umd5l7blj"/>`,
		"fallback": "thesvg-color:acm",
	});
}

export default Component;
