import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1z9jtbha.css';
import '../../css/p/pllpyyb8j.css';
import '../../css/j/j07hvobsr.css';
import '../../css/u/u1q7c1byo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1z9jtbha wm-k"/><path class="pllpyyb8j wm-k"/><path class="j07hvobsr wm-k"/><path class="u1q7c1byo wm-a"/>`,
		"fallback": "withicons-bauhaus:fish",
	});
}

export default Component;
