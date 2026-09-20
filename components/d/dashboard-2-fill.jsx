import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi8c47b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi8c47b-k"/>`,
		"fallback": "ri:dashboard-2-fill",
	});
}

export default Component;
