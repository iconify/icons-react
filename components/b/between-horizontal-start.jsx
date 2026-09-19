import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nilgi0bgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nilgi0bgj"/>`,
		"fallback": "hugeicons:between-horizontal-start",
	});
}

export default Component;
