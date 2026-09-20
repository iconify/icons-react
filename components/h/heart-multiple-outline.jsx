import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krhed0bxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krhed0bxz"/>`,
		"fallback": "mdi:heart-multiple-outline",
	});
}

export default Component;
