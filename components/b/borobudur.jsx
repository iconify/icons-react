import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahi4ik3zi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahi4ik3zi"/>`,
		"fallback": "hugeicons:borobudur",
	});
}

export default Component;
