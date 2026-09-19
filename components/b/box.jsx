import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og8nmqhzc.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og8nmqhzc"/>`,
		"fallback": "si-glyph:box",
	});
}

export default Component;
