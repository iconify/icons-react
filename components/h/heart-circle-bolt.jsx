import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu8eqhbvf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu8eqhbvf"/>`,
		"fallback": "fa7-solid:heart-circle-bolt",
	});
}

export default Component;
