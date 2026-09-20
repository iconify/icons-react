import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yab8gogpt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yab8gogpt"/>`,
		"fallback": "pinhead:grass",
	});
}

export default Component;
