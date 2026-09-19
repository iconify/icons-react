import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oay1xn8pl.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oay1xn8pl"/>`,
		"fallback": "si-glyph:apron",
	});
}

export default Component;
