import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke6bw-_7t.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke6bw-_7t"/>`,
		"fallback": "si-glyph:arrow-thin-left-top",
	});
}

export default Component;
