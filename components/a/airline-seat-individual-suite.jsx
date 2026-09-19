import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fehcr6bze.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fehcr6bze"/>`,
		"fallback": "zmdi:airline-seat-individual-suite",
	});
}

export default Component;
