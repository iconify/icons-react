import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fae7j8bsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fae7j8bsy"/>`,
		"fallback": "si:clipboard-check-line",
	});
}

export default Component;
