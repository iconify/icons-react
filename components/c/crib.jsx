import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug2uzzb9l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug2uzzb9l"/>`,
		"fallback": "icon-park-outline:crib",
	});
}

export default Component;
