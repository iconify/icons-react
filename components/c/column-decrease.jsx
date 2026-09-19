import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt5219fsk.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt5219fsk"/>`,
		"fallback": "si-glyph:column-decrease",
	});
}

export default Component;
