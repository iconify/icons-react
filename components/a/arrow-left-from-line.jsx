import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sroc94bbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sroc94bbc"/>`,
		"fallback": "hugeicons:arrow-left-from-line",
	});
}

export default Component;
