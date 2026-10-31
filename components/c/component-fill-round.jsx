import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fph4z6l2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fph4z6l2q"/>`,
		"fallback": "coolicons:component-fill-round",
	});
}

export default Component;
