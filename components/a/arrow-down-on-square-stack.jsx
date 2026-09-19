import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzf-ogtqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzf-ogtqd"/>`,
		"fallback": "heroicons:arrow-down-on-square-stack",
	});
}

export default Component;
