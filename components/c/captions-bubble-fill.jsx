import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnet24b2r.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnet24b2r"/>`,
		"fallback": "f7:captions-bubble-fill",
	});
}

export default Component;
