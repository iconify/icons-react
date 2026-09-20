import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh3c16bgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh3c16bgd"/>`,
		"fallback": "reicon:arrow-down-2-filled",
	});
}

export default Component;
