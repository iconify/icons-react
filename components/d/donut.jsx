import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flx43mdno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flx43mdno"/>`,
		"fallback": "noviair-light:donut",
	});
}

export default Component;
