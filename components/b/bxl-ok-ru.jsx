import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su1rsj47n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su1rsj47n"/>`,
		"fallback": "bx:bxl-ok-ru",
	});
}

export default Component;
