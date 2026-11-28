import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxh-a_buh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxh-a_buh"/>`,
		"fallback": "noviair-light:basket-check",
	});
}

export default Component;
