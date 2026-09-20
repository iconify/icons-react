import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv1o7x2xo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv1o7x2xo"/>`,
		"fallback": "oui:editor-align-right",
	});
}

export default Component;
