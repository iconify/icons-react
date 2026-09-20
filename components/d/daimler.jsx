import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uixl3td8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uixl3td8h"/>`,
		"fallback": "simple-icons:daimler",
	});
}

export default Component;
