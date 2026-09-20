import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4y2z7h4a.css';
import '../../css/a/akcuay_-h.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4y2z7h4a"/><path class="akcuay_-h"/>`,
		"fallback": "openmoji:cloud",
	});
}

export default Component;
