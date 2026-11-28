import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/das1e-7xn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="das1e-7xn"/>`,
		"fallback": "noviair-light:cake",
	});
}

export default Component;
