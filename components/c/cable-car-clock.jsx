import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa9u4gmpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa9u4gmpw"/>`,
		"fallback": "noviair-light:cable-car-clock",
	});
}

export default Component;
