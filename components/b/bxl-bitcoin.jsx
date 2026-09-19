import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-gm7ibvs.css';
import '../../css/m/mzy1pxb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-gm7ibvs"/><path class="mzy1pxb1w"/>`,
		"fallback": "bx:bxl-bitcoin",
	});
}

export default Component;
