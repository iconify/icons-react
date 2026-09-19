import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygj31lgsv.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygj31lgsv"/>`,
		"fallback": "si-glyph:button-triangle-up",
	});
}

export default Component;
