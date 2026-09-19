import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th5jkqp1k.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th5jkqp1k"/>`,
		"fallback": "si-glyph:in-columns",
	});
}

export default Component;
