import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pczyoks0q.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pczyoks0q"/>`,
		"fallback": "si-glyph:gear",
	});
}

export default Component;
