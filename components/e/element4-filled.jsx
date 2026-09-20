import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4s8ktvhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4s8ktvhl"/>`,
		"fallback": "reicon:element4-filled",
	});
}

export default Component;
