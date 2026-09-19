import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jigokk0sb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jigokk0sb"/>`,
		"fallback": "bx:bxs-briefcase",
	});
}

export default Component;
