import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2qs83soi.css';
import '../../css/e/ea7_acb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2qs83soi"/><path class="ea7_acb9a"/>`,
		"fallback": "bx:bx-history",
	});
}

export default Component;
