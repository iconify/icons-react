import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o75-enbjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o75-enbjh"/>`,
		"fallback": "bx:bxs-message-rounded-x",
	});
}

export default Component;
