import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz76zrbrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz76zrbrf"/>`,
		"fallback": "bx:bxs-file-blank",
	});
}

export default Component;
