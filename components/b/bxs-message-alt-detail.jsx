import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty0d6cbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty0d6cbdd"/>`,
		"fallback": "bx:bxs-message-alt-detail",
	});
}

export default Component;
