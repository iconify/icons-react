import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij78l-lsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij78l-lsk"/>`,
		"fallback": "tabler:cash-banknote-filled",
	});
}

export default Component;
