import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs3y2sk5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs3y2sk5f"/>`,
		"fallback": "griddy-icons:address-book-filled",
	});
}

export default Component;
