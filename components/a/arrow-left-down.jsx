import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4g-0aboz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4g-0aboz"/>`,
		"fallback": "icon-park-outline:arrow-left-down",
	});
}

export default Component;
