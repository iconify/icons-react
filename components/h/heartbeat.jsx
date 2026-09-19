import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we6_thbev.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we6_thbev"/>`,
		"fallback": "healthicons:heartbeat",
	});
}

export default Component;
