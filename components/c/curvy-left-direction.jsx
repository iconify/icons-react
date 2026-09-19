import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fex8azbdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fex8azbdy"/>`,
		"fallback": "hugeicons:curvy-left-direction",
	});
}

export default Component;
