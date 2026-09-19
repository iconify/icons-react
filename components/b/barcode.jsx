import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3-u3ab7s.css';

const viewBox = {"width":1025,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3-u3ab7s"/>`,
		"fallback": "whh:barcode",
	});
}

export default Component;
