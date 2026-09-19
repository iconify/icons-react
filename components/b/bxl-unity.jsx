import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsv2y1fxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsv2y1fxe"/>`,
		"fallback": "bx:bxl-unity",
	});
}

export default Component;
