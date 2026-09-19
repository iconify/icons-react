import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b96ddnpdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b96ddnpdm"/>`,
		"fallback": "bx:bxs-credit-card-front",
	});
}

export default Component;
