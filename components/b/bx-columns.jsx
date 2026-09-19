import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wix1-6b0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wix1-6b0q"/>`,
		"fallback": "bx:bx-columns",
	});
}

export default Component;
