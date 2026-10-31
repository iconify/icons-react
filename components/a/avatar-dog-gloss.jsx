import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0pte_b8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0pte_b8a"/>`,
		"fallback": "withicons:avatar-dog-gloss",
	});
}

export default Component;
