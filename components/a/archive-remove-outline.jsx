import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwtfi1jsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwtfi1jsp"/>`,
		"fallback": "mdi:archive-remove-outline",
	});
}

export default Component;
