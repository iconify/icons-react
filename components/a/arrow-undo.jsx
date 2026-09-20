import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyikc1z8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyikc1z8f"/>`,
		"fallback": "proicons:arrow-undo",
	});
}

export default Component;
