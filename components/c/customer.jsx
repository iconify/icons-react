import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy5qr8bcf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy5qr8bcf"/>`,
		"fallback": "raphael:customer",
	});
}

export default Component;
