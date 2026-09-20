import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk8bvthsj.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk8bvthsj"/>`,
		"fallback": "lineicons:claude",
	});
}

export default Component;
