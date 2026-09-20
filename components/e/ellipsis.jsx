import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpm9sb8kj.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpm9sb8kj"/>`,
		"fallback": "picon:ellipsis",
	});
}

export default Component;
