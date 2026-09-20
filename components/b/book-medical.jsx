import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggep1bc6h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggep1bc6h"/>`,
		"fallback": "la:book-medical",
	});
}

export default Component;
