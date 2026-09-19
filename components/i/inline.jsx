import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyu-dyi9e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyu-dyi9e"/>`,
		"fallback": "icon-park-outline:inline",
	});
}

export default Component;
