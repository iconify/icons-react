import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj7w25rnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj7w25rnj"/>`,
		"fallback": "typcn:chart-line-outline",
	});
}

export default Component;
