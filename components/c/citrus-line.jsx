import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tut8ix2_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tut8ix2_j"/>`,
		"fallback": "mingcute:citrus-line",
	});
}

export default Component;
