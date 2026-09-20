import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f12yfw9qr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f12yfw9qr"/>`,
		"fallback": "pinhead:book-with-question-mark",
	});
}

export default Component;
