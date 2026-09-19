import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flslc_b-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flslc_b-z"/>`,
		"fallback": "mono-icons:document-check",
	});
}

export default Component;
