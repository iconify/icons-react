import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpgjlta-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpgjlta-m"/>`,
		"fallback": "thesvg-color:g2a",
	});
}

export default Component;
