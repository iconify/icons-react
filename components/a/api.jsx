import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6la5eb9l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6la5eb9l"/>`,
		"fallback": "icon-park-outline:api",
	});
}

export default Component;
