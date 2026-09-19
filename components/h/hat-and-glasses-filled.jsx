import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-69cibvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-69cibvi"/>`,
		"fallback": "bitcoin-icons:hat-and-glasses-filled",
	});
}

export default Component;
