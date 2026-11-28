import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g00hkbrhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g00hkbrhp"/>`,
		"fallback": "noviair-light:car-off",
	});
}

export default Component;
