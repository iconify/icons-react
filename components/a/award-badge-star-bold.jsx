import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plnj9kb0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plnj9kb0h"/>`,
		"fallback": "streamline-ultimate:award-badge-star-bold",
	});
}

export default Component;
