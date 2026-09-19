import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3886wx1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3886wx1c"/>`,
		"fallback": "bx:bxs-been-here",
	});
}

export default Component;
