import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi8-l0bzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi8-l0bzw"/>`,
		"fallback": "withicons:clipboard-x-gloss",
	});
}

export default Component;
