import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1p8x0k_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1p8x0k_u"/>`,
		"fallback": "tabler:hexagon-letter-a-filled",
	});
}

export default Component;
