import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dedb2pwrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dedb2pwrh"/>`,
		"fallback": "uil:exclamation-circle",
	});
}

export default Component;
