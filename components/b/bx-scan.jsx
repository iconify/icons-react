import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbf7gxbpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbf7gxbpw"/>`,
		"fallback": "bx:bx-scan",
	});
}

export default Component;
