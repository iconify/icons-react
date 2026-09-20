import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lph5zbctn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lph5zbctn"/>`,
		"fallback": "keyline-icons:book-fill",
	});
}

export default Component;
