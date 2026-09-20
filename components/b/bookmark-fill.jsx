import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmlzz4jlr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmlzz4jlr"/>`,
		"fallback": "ri:bookmark-fill",
	});
}

export default Component;
