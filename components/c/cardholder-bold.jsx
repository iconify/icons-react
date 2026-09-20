import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d23a2lb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d23a2lb4f"/>`,
		"fallback": "solar:cardholder-bold",
	});
}

export default Component;
