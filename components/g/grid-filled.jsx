import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyeqe8b_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyeqe8b_u"/>`,
		"fallback": "bitcoin-icons:grid-filled",
	});
}

export default Component;
