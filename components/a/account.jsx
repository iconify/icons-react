import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo5xuvb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo5xuvb8m"/>`,
		"fallback": "mdi:account",
	});
}

export default Component;
