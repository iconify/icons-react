import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwiww1w_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwiww1w_q"/>`,
		"fallback": "guidance:braille",
	});
}

export default Component;
