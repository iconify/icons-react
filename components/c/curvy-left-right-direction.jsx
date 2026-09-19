import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxi3aebem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxi3aebem"/>`,
		"fallback": "hugeicons:curvy-left-right-direction",
	});
}

export default Component;
