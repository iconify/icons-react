import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pav567bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pav567bfc"/>`,
		"fallback": "bx:bxs-ruler",
	});
}

export default Component;
