import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdbaj067k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdbaj067k"/>`,
		"fallback": "bx:bxl-less",
	});
}

export default Component;
