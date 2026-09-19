import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj91ngb3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj91ngb3c"/>`,
		"fallback": "circum:fork-knife",
	});
}

export default Component;
