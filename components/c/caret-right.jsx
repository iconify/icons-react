import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8pfw9bnr.css';

const viewBox = {"width":112,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8pfw9bnr"/>`,
		"fallback": "zmdi:caret-right",
	});
}

export default Component;
