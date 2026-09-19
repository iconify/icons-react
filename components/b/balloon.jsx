import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5os10bpa.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5os10bpa"/>`,
		"fallback": "si-glyph:balloon",
	});
}

export default Component;
