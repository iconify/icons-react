import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxctd4bao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxctd4bao"/>`,
		"fallback": "bx:bxs-ev-station",
	});
}

export default Component;
