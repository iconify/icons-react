import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ielod8zdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ielod8zdh"/>`,
		"fallback": "heroicons:funnel",
	});
}

export default Component;
