import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-90pibdr.css';

const viewBox = {"width":27,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-90pibdr"/>`,
		"fallback": "fontisto:heart",
	});
}

export default Component;
