import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_m8x9bte.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_m8x9bte"/>`,
		"fallback": "academicons:impactstory-square",
	});
}

export default Component;
