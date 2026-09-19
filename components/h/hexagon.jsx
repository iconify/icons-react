import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xymg-f0_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xymg-f0_j"/>`,
		"fallback": "hugeicons:hexagon",
	});
}

export default Component;
