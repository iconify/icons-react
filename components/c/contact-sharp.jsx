import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1_h6wber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1_h6wber"/>`,
		"fallback": "pixelarticons:contact-sharp",
	});
}

export default Component;
