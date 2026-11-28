import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpjk8pbbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpjk8pbbu"/>`,
		"fallback": "noviair:dashboard-gear",
	});
}

export default Component;
