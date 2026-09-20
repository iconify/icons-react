import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1y1a3p4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1y1a3p4m"/>`,
		"fallback": "keyline-icons:hat-glasses",
	});
}

export default Component;
