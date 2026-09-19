import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6l3qbczg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6l3qbczg"/>`,
		"fallback": "gridicons:align-center",
	});
}

export default Component;
