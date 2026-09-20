import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3agib3wj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3agib3wj"/>`,
		"fallback": "typcn:arrow-back-outline",
	});
}

export default Component;
