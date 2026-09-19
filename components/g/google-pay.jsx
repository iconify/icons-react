import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luvrd72ph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luvrd72ph"/>`,
		"fallback": "bxl:google-pay",
	});
}

export default Component;
