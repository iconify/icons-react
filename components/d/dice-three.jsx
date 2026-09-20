import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0-k_j9dq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0-k_j9dq"/>`,
		"fallback": "uil:dice-three",
	});
}

export default Component;
