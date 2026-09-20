import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb7-bug3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb7-bug3k"/>`,
		"fallback": "thesvg-color:bentley",
	});
}

export default Component;
