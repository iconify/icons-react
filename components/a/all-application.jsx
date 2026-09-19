import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9q_l8kgh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9q_l8kgh"/>`,
		"fallback": "icon-park-outline:all-application",
	});
}

export default Component;
