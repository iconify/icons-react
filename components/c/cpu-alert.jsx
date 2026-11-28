import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvs-pbb2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvs-pbb2e"/>`,
		"fallback": "noviair-light:cpu-alert",
	});
}

export default Component;
