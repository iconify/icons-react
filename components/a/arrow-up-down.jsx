import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dso2jklbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dso2jklbm"/>`,
		"fallback": "hugeicons:arrow-up-down",
	});
}

export default Component;
