import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo583e5rz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo583e5rz"/>`,
		"fallback": "noviair-light:arrow-up-right",
	});
}

export default Component;
