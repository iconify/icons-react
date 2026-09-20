import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdte0c4ry.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdte0c4ry"/>`,
		"fallback": "memory:box-light-horizontal-down-stipple",
	});
}

export default Component;
