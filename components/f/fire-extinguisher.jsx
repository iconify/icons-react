import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3f_iebdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3f_iebdr"/>`,
		"fallback": "noviair-light:fire-extinguisher",
	});
}

export default Component;
