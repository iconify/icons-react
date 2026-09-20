import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpq1hhjvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpq1hhjvc"/>`,
		"fallback": "pixelarticons:align-vertical-distribute-end",
	});
}

export default Component;
