import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvyy595xw.css';
import '../../css/t/t2k1y2acb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvyy595xw"/><path class="t2k1y2acb"/>`,
		"fallback": "boxicons:cart-plus",
	});
}

export default Component;
