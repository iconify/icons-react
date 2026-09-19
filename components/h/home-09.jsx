import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky4bs7b5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky4bs7b5q"/>`,
		"fallback": "hugeicons:home-09",
	});
}

export default Component;
