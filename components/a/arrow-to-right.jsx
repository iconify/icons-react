import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8u8ch62e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8u8ch62e"/>`,
		"fallback": "bx:arrow-to-right",
	});
}

export default Component;
