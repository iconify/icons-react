import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqpmzl4vv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqpmzl4vv"/>`,
		"fallback": "griddy-icons:behance",
	});
}

export default Component;
