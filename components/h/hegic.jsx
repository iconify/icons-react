import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8x4o2b8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8x4o2b8v"/>`,
		"fallback": "token:hegic",
	});
}

export default Component;
