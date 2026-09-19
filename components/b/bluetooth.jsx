import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kze38ackl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kze38ackl"/>`,
		"fallback": "icon-park-outline:bluetooth",
	});
}

export default Component;
