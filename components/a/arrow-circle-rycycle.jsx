import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew9ym6s6p.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew9ym6s6p"/>`,
		"fallback": "si-glyph:arrow-circle-rycycle",
	});
}

export default Component;
