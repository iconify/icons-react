import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj3lkbcav.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj3lkbcav"/>`,
		"fallback": "memory:align-horizontal-center",
	});
}

export default Component;
