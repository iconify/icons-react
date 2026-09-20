import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flf719bsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flf719bsz"/>`,
		"fallback": "mdi:card-remove-outline",
	});
}

export default Component;
