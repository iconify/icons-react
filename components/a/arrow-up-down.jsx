import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwic0_bmm.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwic0_bmm"/>`,
		"fallback": "si-glyph:arrow-up-down",
	});
}

export default Component;
