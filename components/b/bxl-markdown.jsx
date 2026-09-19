import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to_jppbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to_jppbia"/>`,
		"fallback": "bx:bxl-markdown",
	});
}

export default Component;
